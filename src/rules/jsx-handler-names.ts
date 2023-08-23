/* eslint-disable security/detect-non-literal-regexp */
import { AST_NODE_TYPES } from "@typescript-eslint/utils";
import type { JSONSchema4 } from "@typescript-eslint/utils/json-schema";

import { createEslintRule } from "../../tools/create-eslint-rule";
import { O } from "../lib/primitives/data";
import { ASTUtils } from "../utils/ast-utils";
import * as JSXUtils from "../utils/jsx-utils";

type MessageIds = "badHandlerName" | "badPropKey";

const schema = [
    {
        anyOf: [
            {
                type: "object",
                additionalProperties: false,
                properties: {
                    checkInlineFunction: { type: "boolean" },
                    checkLocalVariables: { type: "boolean" },
                    eventHandlerPrefix: { type: "string" },
                    eventHandlerPropPrefix: { type: "string" },
                },
            },
            {
                type: "object",
                additionalProperties: false,
                properties: {
                    checkInlineFunction: { type: "boolean" },
                    checkLocalVariables: { type: "boolean" },
                    eventHandlerPrefix: { type: "string" },
                    eventHandlerPropPrefix: {
                        type: "boolean",
                        enum: [false],
                    },
                },
            },
            {
                type: "object",
                additionalProperties: false,
                properties: {
                    checkInlineFunction: { type: "boolean" },
                    checkLocalVariables: { type: "boolean" },
                    eventHandlerPrefix: {
                        type: "boolean",
                        enum: [false],
                    },
                    eventHandlerPropPrefix: { type: "string" },
                },
            },
            {
                type: "object",
                additionalProperties: false,
                properties: {
                    checkLocalVariables: { type: "boolean" },
                },
            },
            {
                type: "object",
                additionalProperties: false,
                properties: {
                    checkInlineFunction: { type: "boolean" },
                },
            },
        ],
    },
] satisfies JSONSchema4[];

type Options = [
    {
        checkInlineFunction?: boolean;
        checkLocalVariables?: boolean;
        eventHandlerPrefix?: false | string;
        eventHandlerPropPrefix?: false | string;
    },
];

const defaultOptions = [
    {
        checkInlineFunction: false,
        checkLocalVariables: false,
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
    },
] satisfies Options;

export default createEslintRule<Options, MessageIds>({
    name: "jsx-handler-names",
    meta: {
        type: "suggestion",
        docs: {
            description: "enforce event handler naming conventions in JSX",
            recommended: "recommended",
        },
        schema,
        messages: {
            badHandlerName:
                "Handler function for {{propKey}} prop key must be a camelCase name beginning with '{{handlerPrefix}}' only",
            badPropKey: "Prop key for {{propValue}} must begin with '{{handlerPropPrefix}}'",
        },
    },
    create(context, [{ checkInlineFunction, checkLocalVariables, eventHandlerPrefix, eventHandlerPropPrefix }]) {
        const checkEventHandlerPrefix = !!eventHandlerPrefix;
        const checkEventHandlerPropPrefix = !!eventHandlerPropPrefix;

        const handlerPrefix = eventHandlerPrefix || "handle";
        const handlerPropPrefix = eventHandlerPropPrefix || "on";

        const PROP_EVENT_HANDLER_REGEX = new RegExp(`^(${handlerPropPrefix}[A-Z].*|ref)$`, "u");

        // prettier-ignore
        const EVENT_HANDLER_REGEX = new RegExp(`^((props\\.${handlerPropPrefix || ""})|((.*\\.)?${handlerPrefix}))[0-9]*[A-Z].*$`, "u");

        return {
            JSXAttribute(node) {
                // Early return if the attribute is not an event handler.
                if (!node.value || !("expression" in node.value)) {
                    return;
                }

                const { expression } = node.value;

                const isInlineFunction = ASTUtils.isNodeOfType(AST_NODE_TYPES.ArrowFunctionExpression)(expression);

                // Early return when not checking inline functions but the expression is an inline function.
                if (!checkInlineFunction && isInlineFunction) {
                    return;
                }

                const maybeInnerFunction =
                    "body" in expression && "callee" in expression.body
                        ? O.fromNullable(expression.body.callee)
                        : O.none();

                const onlyLocalVariables = isInlineFunction ? O.isNone(maybeInnerFunction) : !("object" in expression);

                // Early return when not checking local variables but the expression is a local variable.
                if (!checkLocalVariables && onlyLocalVariables) {
                    return;
                }

                const propKey = JSXUtils.getPropName(node);
                const propValueNode = O.getOrElse(() => expression)(maybeInnerFunction);

                const propValue = context
                    .getSourceCode()
                    .getText(propValueNode)
                    .replace(/\s*/gu, "")
                    // eslint-disable-next-line regexp/no-super-linear-move
                    .replace(/^this\.|.*::/u, "");

                // Early return if the prop key a ref.
                if (propKey === "ref") {
                    return;
                }

                const propIsEventHandler = PROP_EVENT_HANDLER_REGEX.test(propKey);
                const propFnIsNamedCorrectly = EVENT_HANDLER_REGEX.test(propValue);

                if (checkEventHandlerPropPrefix && !propIsEventHandler && propFnIsNamedCorrectly) {
                    context.report({
                        data: {
                            handlerPropPrefix,
                            propValue,
                        },
                        messageId: "badPropKey",
                        node,
                    });
                }

                if (checkEventHandlerPrefix && propIsEventHandler && !propFnIsNamedCorrectly) {
                    return context.report({
                        data: {
                            handlerPrefix,
                            propKey,
                        },
                        messageId: "badHandlerName",
                        node,
                    });
                }
            },
        };
    },
    defaultOptions,
});
import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/types";

import { createEslintRule } from "../../tools/create-eslint-rule";
import type { RuleName } from "../../typings";
import { AST } from "../utils/ast";
import { isJSX } from "../utils/jsx";

const RULE_NAME: RuleName = "no-misused-comment-in-textnode";

type MessageID = "MISUSED_COMMENT_IN_TEXTNODE";

type Options = readonly [];

const defaultOptions = [] as const satisfies Options;

export default createEslintRule<Options, MessageID>({
    name: RULE_NAME,
    meta: {
        type: "problem",
        docs: {
            description: "disallow comments from being inserted as text nodes",
        },
        schema: [],
        messages: {
            MISUSED_COMMENT_IN_TEXTNODE:
                "Possible misused comment in text node. Comments inside children section of tag should be placed inside braces",
        },
    },
    defaultOptions,
    create(context) {
        function checkText(node: TSESTree.Literal | TSESTree.JSXText) {
            if (AST.isOneOf([AST_NODE_TYPES.JSXAttribute, AST_NODE_TYPES.JSXExpressionContainer])(node.parent)) {
                return false;
            }

            const rawValue = context.getSourceCode().getText(node);

            return /^\s*\/(\/|\*)/mu.test(rawValue) && node.parent.type.includes("JSX");
        }

        const check = (node: TSESTree.Literal | TSESTree.JSXText) => {
            if (!isJSX(node.parent)) {
                return;
            }

            if (checkText(node)) {
                context.report({
                    messageId: "MISUSED_COMMENT_IN_TEXTNODE",
                    node,
                });
            }
        };

        return {
            JSXText: check,
            Literal: check,
        };
    },
});

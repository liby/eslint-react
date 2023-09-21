import { AST_NODE_TYPES, type TSESTree } from "@typescript-eslint/utils";
import memo from "micro-memoize";
import { match, P } from "ts-pattern";

import type { RuleContext } from "../../typings/rule-context";
import { F, I, O } from "../lib/primitives/data";
import { AST } from "./ast";
import { isCreateElement } from "./is-create-element";
import { findVariableByNameUpToGlobal } from "./variable";

export const isJSXElement = AST.is(AST_NODE_TYPES.JSXElement);

export const isJSXFragment = AST.is(AST_NODE_TYPES.JSXFragment);

export const isJSX = (node: TSESTree.Node): node is TSESTree.JSXElement | TSESTree.JSXFragment => {
    return isJSXElement(node) || isJSXFragment(node);
};

export const isJsxTagNameExpression = AST.isOneOf([
    AST_NODE_TYPES.JSXIdentifier,
    AST_NODE_TYPES.JSXMemberExpression,
    AST_NODE_TYPES.JSXNamespacedName,
]);

export function hasChildren(node: TSESTree.JSXElement | TSESTree.JSXFragment): boolean {
    return node.children.length > 0;
}

export const isJSXValue = memo(
    (node: TSESTree.Node | null, context: RuleContext, strict: boolean, ignoreNull: boolean): boolean => {
        if (!node) {
            return false;
        }

        return match(node.type)
            .with(AST_NODE_TYPES.JSXElement, F.constTrue)
            .with(AST_NODE_TYPES.JSXFragment, F.constTrue)
            .with(AST_NODE_TYPES.Literal, () => {
                if (!("value" in node) || ignoreNull) {
                    return false;
                }

                return node.value === null;
            })
            .with(AST_NODE_TYPES.ConditionalExpression, () => {
                if (!("consequent" in node)) {
                    return false;
                }

                const leftHasJSX = match(node.consequent)
                    .with(P.array(), (n) => {
                        return n.some((n) => isJSXValue(n, context, strict, ignoreNull));
                    })
                    .with(P.any, (n) => {
                        return isJSXValue(n, context, strict, ignoreNull);
                    })
                    .exhaustive();

                return leftHasJSX || ("alternate" in node && isJSXValue(node.alternate, context, strict, ignoreNull));
            })
            .with(AST_NODE_TYPES.LogicalExpression, () => {
                if (!("left" in node)) {
                    return false;
                }

                return (
                    isJSXValue(node.left, context, strict, ignoreNull)
                    || isJSXValue(node.right, context, strict, ignoreNull)
                );
            })
            .with(AST_NODE_TYPES.SequenceExpression, () => {
                if (!("expressions" in node)) {
                    return false;
                }

                const exp = node.expressions.at(-1);

                return !I.isNullable(exp) && isJSXValue(exp, context, strict, ignoreNull);
            })
            .with(AST_NODE_TYPES.CallExpression, () => {
                return isCreateElement(node, context);
            })
            .with(AST_NODE_TYPES.Identifier, () => {
                if (!("name" in node)) {
                    return false;
                }

                if (isJsxTagNameExpression(node)) {
                    return true;
                }

                if (!I.isString(node.name) && !AST.is(AST_NODE_TYPES.Identifier)(node.name)) {
                    return isJsxTagNameExpression(node.name);
                }

                const name = match(node.name)
                    .with(P.string, F.identity)
                    .with({ type: AST_NODE_TYPES.Identifier }, (n) => n.name)
                    .exhaustive();

                const variable = findVariableByNameUpToGlobal(name, context.getScope());

                return F.pipe(
                    O.flatMapNullable(variable, (v) => v.defs.at(0)?.node),
                    O.flatMapNullable((n) => ("init" in n ? n.init : n)),
                    O.map(AST.isOneOf([AST_NODE_TYPES.JSXElement, AST_NODE_TYPES.JSXFragment])),
                    O.getOrElse(F.constFalse),
                );
            })
            .otherwise(F.constFalse);
    },
);

export function isReturnStatementReturningJSX(
    node: TSESTree.ReturnStatement,
    context: RuleContext,
    strict = false,
    ignoreNull = false,
) {
    const returnStatements = AST.getNestedReturnStatements(node);

    return returnStatements.some((returnStatement) =>
        isJSXValue(returnStatement.argument, context, strict, ignoreNull)
    );
}

export function getPropName(node: TSESTree.JSXAttribute) {
    return match(node.name)
        .when(AST.is(AST_NODE_TYPES.JSXIdentifier), (n) => n.name)
        .when(AST.is(AST_NODE_TYPES.JSXNamespacedName), (n) => n.name.name)
        .exhaustive();
}

export function getPropNameWithNamespace(node: TSESTree.JSXAttribute) {
    return match(node.name)
        .when(AST.is(AST_NODE_TYPES.JSXIdentifier), (n) => n.name)
        .when(AST.is(AST_NODE_TYPES.JSXNamespacedName), (n) => `${n.namespace.name}:${n.name.name}`)
        .exhaustive();
}

export function findPropInProperties(
    properties: (TSESTree.Property | TSESTree.RestElement)[] | TSESTree.ObjectLiteralElement[],
    context: RuleContext,
    seenProps: string[] = [],
) {
    return (propName: string): O.Option<(typeof properties)[number]> => {
        return O.fromNullable(
            properties.find((prop) => {
                if (AST.is(AST_NODE_TYPES.Property)(prop)) {
                    return "name" in prop.key && prop.key.name === propName;
                }

                if (AST.is(AST_NODE_TYPES.SpreadElement)(prop)) {
                    if (!("argument" in prop) || !("name" in prop.argument)) {
                        return false;
                    }

                    const { name } = prop.argument;

                    const maybeFirstDefNodeInit = F.pipe(
                        findVariableByNameUpToGlobal(name, context.getScope()),
                        O.flatMapNullable((v) => v.defs.at(0)),
                        O.flatMapNullable((d) => d.node),
                        O.flatMapNullable((n) => ("init" in n ? n.init : null)),
                    );

                    if (O.isNone(maybeFirstDefNodeInit)) {
                        return false;
                    }

                    const firstDefNodeInit = maybeFirstDefNodeInit.value;

                    if (!AST.is(AST_NODE_TYPES.ObjectExpression)(firstDefNodeInit)) {
                        return false;
                    }

                    if (seenProps.includes(name)) {
                        return false;
                    }

                    return O.isSome(
                        findPropInProperties(firstDefNodeInit.properties, context, [...seenProps, name])(propName),
                    );
                }

                return false;
            }),
        );
    };
}

export function findPropInAttributes(
    attributes: (TSESTree.JSXAttribute | TSESTree.JSXSpreadAttribute)[],
    context: RuleContext,
) {
    return (propName: string) => {
        return O.fromNullable(
            attributes.find((attr) => {
                return match(attr)
                    .when(AST.is(AST_NODE_TYPES.JSXAttribute), (attr) => {
                        return getPropName(attr) === propName;
                    })
                    .when(AST.is(AST_NODE_TYPES.JSXSpreadAttribute), (attr) => {
                        if (!("argument" in attr) || !("name" in attr.argument)) {
                            return false;
                        }

                        const { name } = attr.argument;

                        const maybeFirstDefNodeInit = F.pipe(
                            findVariableByNameUpToGlobal(name, context.getScope()),
                            O.flatMapNullable((v) => v.defs.at(0)),
                            O.flatMapNullable((d) => d.node),
                            O.flatMapNullable((n) => ("init" in n ? n.init : null)),
                        );

                        if (O.isNone(maybeFirstDefNodeInit)) {
                            return false;
                        }

                        if (!("properties" in maybeFirstDefNodeInit.value)) {
                            return false;
                        }

                        return O.isSome(
                            findPropInProperties(maybeFirstDefNodeInit.value.properties, context)(propName),
                        );
                    })
                    .otherwise(F.constFalse);
            }),
        );
    };
}

export function isWhiteSpace(value: string) {
    return /^\s*$/u.test(value);
}

export function isLineBreak(node: TSESTree.Node): boolean {
    const isLiteral = AST.isOneOf([AST_NODE_TYPES.Literal, AST_NODE_TYPES.JSXText])(node);

    if (!("value" in node) || !I.isString(node.value)) {
        return false;
    }

    const isMultiline = node.loc.start.line !== node.loc.end.line;

    return isLiteral && isMultiline && isWhiteSpace(node.value);
}

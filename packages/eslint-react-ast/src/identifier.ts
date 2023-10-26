import type { TSESTree } from "@typescript-eslint/types";
import { match } from "ts-pattern";

import { isOneOf, NodeType, type TSESTreeClass, type TSESTreeFunction } from "./node-types";

export function isIdentifierWithName<const T extends string>(
    node: TSESTree.Node,
    name: T,
): node is TSESTree.Identifier & { name: T } {
    return node.type === NodeType.Identifier
        && node.name === name;
}

export function isIdentifierWithOneOfNames<T extends string[]>(
    node: TSESTree.Node,
    name: T,
): node is TSESTree.Identifier & { name: T[number] } {
    return node.type === NodeType.Identifier
        && name.includes(node.name);
}

/**
 * Gets FunctionDeclaration's identifier or FunctionExpression's parent identifier if it exists
 * @param node The AST node to check
 * @returns function identifier or null
 */
export function getFunctionIdentifier(node: TSESTreeFunction): TSESTree.Identifier | null {
    if (node.id) {
        return node.id;
    }

    if (isOneOf([NodeType.ArrowFunctionExpression, NodeType.FunctionExpression])(node)) {
        return "id" in node.parent && node.parent.id?.type === NodeType.Identifier
            ? node.parent.id
            : null;
    }

    return null;
}

export function getClassIdentifier(node: TSESTreeClass): TSESTree.Identifier | null {
    return match(node)
        .with({ type: NodeType.ClassDeclaration }, (x) => x.id)
        .with({
            type: NodeType.ClassExpression,
            parent: { type: NodeType.VariableDeclarator, id: { type: NodeType.Identifier } },
        }, (x) => x.parent.id)
        .otherwise(() => null);
}
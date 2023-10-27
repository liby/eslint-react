import type { TSESTree } from "@typescript-eslint/types";
import { isString } from "effect/Predicate";

import { NodeType } from "./node-types";

export function isRegExpLiteral(node: TSESTree.Node): node is TSESTree.RegExpLiteral {
    return node.type === NodeType.Literal && "regex" in node;
}

export function isStringLiteral(node: TSESTree.Node | null | undefined): node is TSESTree.StringLiteral {
    return node?.type === NodeType.Literal && isString(node.value);
}
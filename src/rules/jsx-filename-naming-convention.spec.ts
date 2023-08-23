import RuleTester, { getFixturesRootDir } from "../../test/rule-tester";
import rule from "./jsx-filename-naming-convention";

const rootDir = getFixturesRootDir();

const ruleTester = new RuleTester({
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: rootDir,
    },
});

const RULE_NAME = "jsx-filename-naming-convention";

const code = "export {}";

ruleTester.run(RULE_NAME, rule, {
    valid: [
        {
            filename: "PascalCase.tsx",
            code,
        },
        {
            filename: "PascalCase.tsx",
            code,
            options: [{ rule: "PascalCase" }],
        },
        {
            filename: "camelCase.tsx",
            code,
            options: [{ rule: "camelCase" }],
        },
        {
            filename: "kebab-case.tsx",
            code,
            options: [{ rule: "kebab-case" }],
        },
        {
            filename: "snake_case.tsx",
            code,
            options: [{ rule: "snake_case" }],
        },
    ],
    invalid: [
        {
            filename: "pascalCase.tsx",
            code,
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "pascalCase.tsx",
                        rule: "PascalCase",
                        suggestion: "PascalCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "camelCase.tsx",
            code,
            options: [{ rule: "PascalCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "camelCase.tsx",
                        rule: "PascalCase",
                        suggestion: "CamelCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "kebab-case.tsx",
            code,
            options: [{ rule: "PascalCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "kebab-case.tsx",
                        rule: "PascalCase",
                        suggestion: "KebabCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "snake_case.tsx",
            code,
            options: [{ rule: "PascalCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "snake_case.tsx",
                        rule: "PascalCase",
                        suggestion: "SnakeCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "PascalCase.tsx",
            code,
            options: [{ rule: "camelCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "PascalCase.tsx",
                        rule: "camelCase",
                        suggestion: "pascalCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "kebab-case.tsx",
            code,
            options: [{ rule: "camelCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "kebab-case.tsx",
                        rule: "camelCase",
                        suggestion: "kebabCase.tsx",
                    },
                },
            ],
        },
        {
            filename: "snake_case.tsx",
            code,
            options: [{ rule: "camelCase" }],
            errors: [
                {
                    messageId: "filenameCaseMismatchWithSuggestion",
                    data: {
                        name: "snake_case.tsx",
                        rule: "camelCase",
                        suggestion: "snakeCase.tsx",
                    },
                },
            ],
        },
    ],
});
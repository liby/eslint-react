import url from "node:url";

// @ts-expect-error - this is a valid import
import eslint from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
// @ts-expect-error - this is a valid import
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
// @ts-expect-error - this is a valid import
import eslintPluginPlugin from "eslint-plugin-eslint-plugin";
import importPlugin from "eslint-plugin-import-x";
import jsdocPlugin from "eslint-plugin-jsdoc";
// @ts-expect-error - this is a valid import
import perfectionist from "eslint-plugin-perfectionist";
// @ts-expect-error - this is a valid import
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
// @ts-expect-error - this is a valid import
import unicornPlugin from "eslint-plugin-unicorn";
import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

type FlatConfig = Parameters<typeof tseslint.config>[number];
const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const config: FlatConfig[] = [
  // register all of the plugins up-front
  {
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ["@typescript-eslint"]: tseslint.plugin,
      ["eslint-comments"]: eslintCommentsPlugin,
      ["eslint-plugin"]: eslintPluginPlugin,
      ["import"]: importPlugin,
      ["jsdoc"]: jsdocPlugin,
      ["perfectionist"]: perfectionist,
      ["simple-import-sort"]: simpleImportSortPlugin,
      ["unicorn"]: unicornPlugin,
    },
  },
  // extends ...
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  perfectionistNatural,
  jsdocPlugin.configs["flat/recommended-typescript-error"],
  // base config
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: [
          "tsconfig.json",
          "packages/*/tsconfig.json",
          "packages/*/*/tsconfig.json",
        ],
        tsconfigRootDir: dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 5,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-imports": ["error", {
        disallowTypeAnnotations: true,
        prefer: "type-imports",
      }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
          ignoreConditionalTests: true,
          ignorePrimitives: true,
        },
      ],
      "array-callback-return": "off",
      curly: "off",
      eqeqeq: ["error", "always"],
      "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
      "eslint-comments/no-aggregating-enable": "error",
      "eslint-comments/no-duplicate-disable": "error",
      "eslint-comments/no-unlimited-disable": "error",
      "eslint-comments/no-unused-disable": "error",
      "eslint-comments/no-unused-enable": "error",
      "eslint-comments/no-use": [
        "error",
        {
          allow: [
            "eslint-disable",
            "eslint-disable-line",
            "eslint-disable-next-line",
            "eslint-enable",
            "global",
          ],
        },
      ],
      "eslint-plugin/require-meta-docs-url": "off",
      "import/consistent-type-specifier-style": "warn",
      "import/export": "error",
      "import/first": "warn",
      "import/named": "error",
      "import/newline-after-import": "warn",
      "import/no-absolute-path": "error",
      "import/no-cycle": "error",
      "import/no-duplicates": "warn",
      "import/no-dynamic-require": "error",
      "import/no-empty-named-blocks": "error",
      "import/no-mutable-exports": "error",
      "import/no-self-import": "error",
      "import/no-unused-modules": "error",
      "jsdoc/check-param-names": "off",
      "jsdoc/check-tag-names": "off",
      "jsdoc/informative-docs": "warn",
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-returns": "off",
      "jsdoc/require-yields": "off",
      "jsdoc/tag-lines": "off",
      "logical-assignment-operators": "error",
      "max-depth": ["warn", 3],
      "no-console": "error",
      "no-else-return": "error",
      "no-fallthrough": ["error", { commentPattern: ".*intentional fallthrough.*" }],
      "no-mixed-operators": "error",
      "no-process-exit": "error",
      "no-restricted-syntax": [
        "error",
        {
          message: "no let",
          selector: "VariableDeclaration[kind=let]",
        },
        {
          message: "no else",
          selector: "IfStatement[alternate]",
        },
        {
          message: "no optional",
          selector: "TSPropertySignature[optional=true]",
        },
        {
          message: "potential circular dependency",
          selector: 'ImportDeclaration[source.value="."]',
        },
      ],
      "no-undef": "off",
      "one-var": ["error", "never"],
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": [
        "warn",
        {
          type: "natural",
          "custom-groups": {
            id: ["_", "id", "key"],
            type: ["type", "kind"],
            meta: [
              "name",
              "meta",
              "title",
              "description",
            ],
          },
          groups: ["id", "type", "meta", "unknown"],
          order: "asc",
        },
      ],
      "perfectionist/sort-objects": [
        "warn",
        {
          type: "natural",
          "custom-groups": {
            id: ["_", "id", "key"],
            type: ["type", "kind"],
            meta: [
              "name",
              "meta",
              "title",
              "description",
            ],
          },
          groups: ["id", "type", "meta", "unknown"],
          order: "asc",
          "partition-by-comment": "Part:**",
        },
      ],
      "perfectionist/sort-union-types": [
        "warn",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "prefer-object-has-own": "error",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
      "unicorn/template-indent": "warn",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {},
      },
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js"],
    rules: {
      // turn off rules that don't apply to JS code
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: [
      "**/*.spec.{ts,tsx,cts,mts}",
      "**/*.test.{ts,tsx,cts,mts}",
      "**/spec.{ts,tsx,cts,mts}",
      "**/test.{ts,tsx,cts,mts}",
    ],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
      parser: tseslint.parser,
    },
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: [
      "scripts/**/*.{ts,cts,mts}",
      "*.config.{ts,tsx,cts,mts}",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: [
          "tsconfig.json",
        ],
        tsconfigRootDir: dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  gitignore(),
  {
    ignores: [
      "docs",
      "examples",
      "website",
    ],
  },
];

export default tseslint.config(...config);

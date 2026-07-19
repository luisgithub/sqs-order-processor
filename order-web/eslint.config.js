import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    ignores: ["projects/**/*"],
  },
  {
    files: ["src/**/*.ts"],
    plugins: {
      "@typescript-eslint": typescript,
      "@angular-eslint": angular,
      prettier: prettier,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...angular.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "no-undef": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["src/**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplate,
      prettier: prettier,
    },
    languageOptions: {
      parser: angularTemplateParser,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
];
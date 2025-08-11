import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, prettierPlugin },
    extends: ["js/recommended", "plugin:prettier/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": "error",  // Show Prettier issues as ESLint errors
      // add or override other custom rules here if needed
    },
  },
  pluginReact.configs.flat.recommended,
]);


import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/expect-expect": "error",
    },
  },

  { files: ["/.{js,mjs,cjs}"] },
  { files: ["**/.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["*/.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  
]);


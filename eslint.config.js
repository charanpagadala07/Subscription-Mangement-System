import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "prefer-const": "error" // Ensure this is set as an error
    }
  }
];

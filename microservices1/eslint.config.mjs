// microservices1/eslint.config.mjs
import { defineConfig } from "eslint-define-config";

export default defineConfig({
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs}"],
      extends: ["eslint:recommended"],
      env: { browser: true },
    },
    {
      files: ["**/*.js"],
      parserOptions: { sourceType: "script" },
    },
  ],
});
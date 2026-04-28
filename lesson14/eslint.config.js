// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import cypress from 'eslint-plugin-cypress';

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([globalIgnores(['dist', 'storybook-static']), {
  files: ['**/*.{ts,tsx}'],
  ignores: ['**/*.test.{ts,tsx}', '**/test/setup.ts', 'cypress/**'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
}, {
  files: ['**/*.test.{ts,tsx}', '**/test/setup.ts'],
  extends: [js.configs.recommended, tseslint.configs.recommended],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
      ...globals.vitest,
    },
  },
},
  {
    files: ['cypress/**/*.ts'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: { cypress },
    languageOptions: {
      globals: cypress.configs.recommended.languageOptions.globals,
    },
    rules: {
      ...cypress.configs.recommended.rules,
    },
  },
  ...storybook.configs['flat/recommended'],
])

// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'coverage/**',
      'dist/**',
      'vite.*',
      'rollup.*',
      '**/*.d.ts',
      '**/*.js',
      '**/*.mjs',
      'node_modules/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        // projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)

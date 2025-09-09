// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],

    files: ['src/**/*.{ts,tsx}'], // only source files

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname, 
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },

    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'import/order': [
        'error',
        {
          groups: ['builtin','external','internal','parent','sibling','index','object','type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            { pattern: '@/components/**', group: 'internal', position: 'before' },
            { pattern: '@/hooks/**', group: 'internal', position: 'before' },
            { pattern: '@/helpers/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },

    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.{js,jsx}'], // normal JS files
    languageOptions: {
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
      globals: { window: 'readonly', document: 'readonly', console: 'readonly' },
    },
    rules: {}, // JS-only rules here
  },
];

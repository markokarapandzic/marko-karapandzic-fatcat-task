const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
    settings: { react: { version: '18.2' } },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'react',
        'import',
        'react-hooks',
        'unused-imports',
        'jsx-a11y',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            files: ['*.ts', '*.tsx', '*.cjs', '*.mjs'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true,
            },
        ],
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'error',
        'no-console': 'error',
        'no-unused-vars': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
};

module.exports = config;

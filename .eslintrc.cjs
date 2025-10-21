module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-hooks'],
  settings: { react: { version: 'detect' } },
};

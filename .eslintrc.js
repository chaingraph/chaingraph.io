module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@blockmatic/eslint-config-base',
    '@blockmatic/eslint-config-react',
  ],
  settings: {
    'import/resolver': {
      alias: true,
    },
  },
}

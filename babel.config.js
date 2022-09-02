/* eslint-disable */

module.exports = (api) => {
  return {
    plugins: ['@vue/babel-plugin-jsx'],
    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller((caller) => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {},
      ],
    ],
  };
};

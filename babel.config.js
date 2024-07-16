module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@components': './src/components/index',
            '@screens': './src/screens/index',
            '@navigation': './src/navigation/index',
            '@contexts': './src/contexts/index',
            '@themes': './src/themes/index',
          },
        },
      ],
    ],
  };
};

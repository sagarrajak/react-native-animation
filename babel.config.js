module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/app': './src',
          '@/assets': './assets/',
        },
      },
    ],
    ['react-native-worklets/plugin', {}, 'worklets'],
    ['react-native-reanimated/plugin', {}, 'reanimated'],
  ],
};

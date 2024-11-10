// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Custom transformer for SVG
  config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

  // Update assetExts and sourceExts to handle SVG
  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

  return config;
})();

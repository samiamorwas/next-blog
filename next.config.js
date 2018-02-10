module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    if (dev) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      });

      config.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'stylelint-custom-processor-loader'
      });
    }

    return config;
  }
};

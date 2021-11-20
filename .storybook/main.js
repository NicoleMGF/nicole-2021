const path = require('path')

module.exports = {
  stories: [
    '../src/intro/**/*.stories.js',
    '../src/c360/**/*.stories.js',
    '../src/sds/**/*.stories.js'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],

  webpackFinal: async (config, { configType }) => {

    // remove their css loader...
    const rules = config.module.rules.filter((rule) => !rule.test.toString().match('.css'))

    // and replace with our own.
    rules.push({
      test: /\.css$/,
      use: ['raw-loader'],
      include: path.resolve(__dirname, '../src'),
      exclude: path.resolve(__dirname, '../src/globals.css')
    })

    rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../src/globals.css')
    })

    // Add markdown support
    rules.push({
      test: /\.md$/,
      use: ['markdown-loader']
    })

    config.module.rules = rules

    return config
  }
}

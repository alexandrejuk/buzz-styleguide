const path = require('path');

module.exports = {
  title: 'FormerKit',
  components: 'src/components/**/*.js',
  exampleMode: 'expand',
  usageMode: 'expand',
  styleguideComponents: {
    Logo: path.join(__dirname, './styleguide/components/Company.js'),
  },
  theme: {
    color: {
      link: '#757575',
      linkHover: '#6979F8',
      baseBackground: '#fff',
      border: '#e2e4e6',
      sidebarBackground: '#f7f7f7',
    },
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.svg$/,
          use: ['babel-loader', 'svg-react-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};

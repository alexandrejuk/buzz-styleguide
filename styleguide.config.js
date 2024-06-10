const path = require('path');

module.exports = {
  title: 'FormerKit',
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
  sections: [
    {
      name: 'Grid',
      components: 'src/components/grid/**/*.js',
    },
    {
      name: 'Elements',
      components: 'src/components/elements/**/*.js',
      ignore: [
        'src/components/elements/Calendar/Calendar.js',
        'src/components/elements/Icon/Add/**',
        'src/components/elements/Icon/ArrowGlyphDown/**',
        'src/components/elements/Icon/ArrowOutlineLeft/**',
        'src/components/elements/Icon/ArrowOutlineRight/**',
        'src/components/elements/Icon/Award/**',
        'src/components/elements/Icon/Bridge/**',
        'src/components/elements/Icon/Bulb/**',
        'src/components/elements/Icon/Call/**',
        'src/components/elements/Icon/Calendar/**',
        'src/components/elements/Icon/Check/**',
        'src/components/elements/Icon/CirclePlus/**',
        'src/components/elements/Icon/Club/**',
        'src/components/elements/Icon/Coffee/**',
        'src/components/elements/Icon/Contacts/**',
        'src/components/elements/Icon/Direction/**',
        'src/components/elements/Icon/Distance/**',
        'src/components/elements/Icon/Exchange/**',
        'src/components/elements/Icon/Filter/**',
        'src/components/elements/Icon/Hotel/**',
        'src/components/elements/Icon/Loading/**',
        'src/components/elements/Icon/Location/**',
        'src/components/elements/Icon/Message/**',
        'src/components/elements/Icon/Moisture/**',
        'src/components/elements/Icon/Money/**',
        'src/components/elements/Icon/MoneyOff/**',
        'src/components/elements/Icon/More/**',
        'src/components/elements/Icon/Museum/**',
        'src/components/elements/Icon/Next/**',
        'src/components/elements/Icon/Park/**',
        'src/components/elements/Icon/Photo/**',
        'src/components/elements/Icon/Rainy/**',
        'src/components/elements/Icon/Remove/**',
        'src/components/elements/Icon/Reservation/**',
        'src/components/elements/Icon/Restaurant/**',
        'src/components/elements/Icon/Search/**',
        'src/components/elements/Icon/Send/**',
        'src/components/elements/Icon/Stadium/**',
        'src/components/elements/Icon/Subtract/**',
        'src/components/elements/Icon/Time/**',
        'src/components/elements/Icon/Trash/**',
        'src/components/elements/Icon/Trending/**',
        'src/components/elements/Icon/Upload/**',
        'src/components/elements/Icon/Windy/**',
      ]
    },
    {
      name: 'Components',
      components: 'src/components/components/**/*.js',
    },
    {
      name: 'Layout',
      components: 'src/components/layout/**/*.js',
    },
  ],
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

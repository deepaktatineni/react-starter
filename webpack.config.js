const path = require('path')

const OUT_DIR = path.resolve(__dirname, './public/out')
const APP_DIR = path.resolve(__dirname, './client/js')


module.exports = {
  mode: "development",
  entry: {
    main: APP_DIR + '/App.tsx'
  },
  output: {
    filename: 'bundle.js',
    path: OUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: { 
          extensions: [".ts", ".tsx"] 
        },
        use: {
          loader: 'awesome-typescript-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
        resolve: { 
          extensions: [".css"] 
        }
      }
    ]
  }

}
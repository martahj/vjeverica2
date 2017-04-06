const Path = require('path');
const HTMLWebpackPluginConfig = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
	    './client/app.js',
	],
	output: {
		filename: 'bundle.js',
		path: Path.resolve(__dirname, 'dist'),
	},
	// externals: {
	// 	'cheerio': 'window',
	// 	'react/lib/ExecutionEnvironment': true,
	// 	'react/lib/ReactContext': true
	// },
	module: {
		loaders: [
			{
				test: [/\.(js|jsx)$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
	    // {
	    //    test: /\.html/,
	    //    loader: 'html-loader'
	    // },
	    // {
	    //    test: /\.css$/,
	    //    loader: "style-loader!css-loader"
	    // },
	    // {
	    //    test   : /\.(png|jpg)$/,
	    //    loader : 'url-loader'
	    // },
	    // {
	    //    test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	    //    loader : 'file-loader'
	    // }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}

// module.exports = {
//   entry: 'client/app.js',
//   output: {
//     filename: 'app.js',
//     path: `${__dirname}/dist`,
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.(js|jsx)$/],
//         exclude: /node_modules/,
//         loaders: ['babel-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     // enforceExtension: false,
//   },
//   // target: 'node',
//   // devServer: {
//   //   contentBase: 'client/static',
//   //   // hot: true,
//   // },
// };
//
// module.exports = {
//   entry: {
//     javascript: './client/app.js',
//     html: './client/static/index.html',
//   },
//   output: {
//     filename: 'app.js',
//     path: `${__dirname}/dist`,
//     publicPath: '/',
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.(js|jsx)$/],
//         exclude: /node_modules/,
//         loaders: ['babel-loader'],
//       },
//       {
//         test: /\.html$/,
//         loader: 'file-loader',
//         // loader: 'file?name=[name].[ext]',
//       },
//     ],
//   },
//   plugins: [new HTMLWebpackPluginConfig()],
//   devServer: {
//     // contentBase: 'dist/',
//     // hot: true,
//   },
//   // postcss() {
//   //   return [autoprefixer];
//   // },
// };

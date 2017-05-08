const Path = require('path');
const HTMLWebpackPluginConfig = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
	    './client/mountApp.js',
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
	    {
	       test: /\.css$/,
	       loader: "style-loader!css-loader"
	    },
			// {
			// 	test: /\.(png|jpg|svg|gif)$/,
			// 	include: /node_modules/,
			// 	loader: 'file-loader',
			// },
			{
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000',
			},
			// {
			// 	test: /\.svg$/,
			// 	exclude: /node_modules/,
			// 	loader: 'file-loader',
			// },
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: Path.resolve(__dirname, 'client', 'components'),
			util: Path.resolve(__dirname, 'util'),
			definitions: Path.resolve(__dirname, 'util'),
		},
	},
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

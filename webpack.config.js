var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractSCSS = new ExtractTextPlugin({filename: 'css/style.css', disable: false, allChunks: true})
var PRODUCTION = process.env.NODE_ENV === 'production'

var config = {
	context: path.join(__dirname, "src"),
	entry: {
		app: ['./css/style.scss', './main.js'],
		vendor: ['vue', 'vue-router', 'axios']
	},
	output: {
		path: path.join(__dirname, "src"),
        filename: 'bundle.js',
        publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				// use: ['style-loader', 'css-loader', 'sass-loader']
				use: extractSCSS.extract({
					fallback: "style-loader",
					publicPath: "/",
					use: ['css-loader', 'sass-loader', 'postcss-loader']
				})
			},
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: "pre",
				include: path.join(__dirname, "src"),
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: path.join(__dirname, "src"),
				exclude: /node_modules/,
				options: {
					loaders: {
						scss: extractSCSS.extract({
							use: ['css-loader', 'sass-loader', 'postcss-loader'],
							fallback: 'style-loader'
						})
					}
				}
			},
			{
		        test: /\.js$/,
		        include: path.join(__dirname, "src"),
		        exclude: /node_modules/,
		        use: {
		          	loader: 'babel-loader'
		        }
		    },
		    {
		    	test: /\.(gif|png|jpe?g|svg)$/i,
		    	use: [
		    		{
		    			loader: 'url-loader',
		    			options: {
		    				limit: 10000,
              				name: path.posix.join('assets', 'img/[name].[ext]')
		    			}
		    		},
		    		{
		    			loader: 'image-webpack-loader',
				        query: {
				        	mozjpeg: {
				        		progressive: true
				        	},
				        	gifsicle: {
				        		interlaced: false
				        	},
				        	optipng: {
				        		optimizationLevel: 7
				        	},
				          	pngquant: {
					            quality: '60-80',
					            speed: 4
				          	}
				        }
		    		}
		    	],
		    	exclude: /node_modules/,
        		include: __dirname
		    }
		]
	},
	resolve: {
	    extensions: [".webpack.js", ".vue", ".js", ".css", ".scss"]
	},
	plugins: [
		extractSCSS,
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks: Infinity
		}),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
		})
	]
}

if(PRODUCTION){
	console.log('production mode')
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true,
			compress: {
				warnings: false
			},
			output: {
                comments: false
            }
		})
	)
}else{
	console.log('development mode')
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	)
	config.devtool = "#eval-source-map"
	config.devServer = {
		contentBase: path.join(__dirname, "src"),
		compress: true,
		port: 9999,
		inline: true
	}
}

module.exports = config

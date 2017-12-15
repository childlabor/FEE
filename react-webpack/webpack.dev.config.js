// 开发环境 npm test运行

const { resolve } = require('path');
const webpack = require('webpack');
// 分离css 生成独立css文件三步之1 引入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	context: resolve(__dirname, 'src'),
	entry: [
		'react-hot-loader/patch',
    // 开启 React 代码的模块热替换(HMR)

    'webpack-dev-server/client?http://localhost:8888',
    // 为 webpack-dev-server 的环境打包代码
    // 然后连接到指定服务器域名与端口

    'webpack/hot/only-dev-server',
    // 为热替换(HMR)打包好代码
    // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

    './npm-dev.js'
    // 我们 app 的入口文件 
	],
	output:{
		path: resolve(__dirname +"/dist"), // 输出路径必须是绝对路径
		filename: "bundle.js",
		// 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
		publicPath: '/' 
	},
	
  devServer: {	
	  // 开启服务器的模块热替换(HMR)
	  hot: true,
		// 输出文件的路径
	  contentBase: resolve(__dirname, 'dist'),
		// 和上文 output 的“publicPath”值保持一致
	  publicPath: '/'
  },
	module:{
		rules:[
		{
			// 一个匹配loaders所处理的文件的拓展名的正则表达式（必须） 多个用|分隔
			test: /\.(js|jsx)$/,
			// loader的名称（必须）一个时用loader:"", 多个时用use: ["css-loader","style-loader"]
			loader: "babel-loader",
			// include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
			include: /src/, 
			// 为loaders提供额外的设置选项（可选）
			options: {
				presets: [
					['es2015',{"modules": false}],
					'react'
				],
				"plugins": [
					// 开启 React 代码的模块热替换(HMR)
			    "react-hot-loader/babel"  
			  ]
			}
		},
		{
			test: /\.css?$/,
			exclude: /node_modules/,
			// 分离css 生成独立css文件三步之2 不需要style-loader
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		},
		{ 
			test:/.(png|jpg|gif)$/, 
			exclude: /node_modules/,
			loader: 'url-loader?limit=8192',
			options: {
				name: 'images/[hash:12].[ext]'
			}
		}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'), // 分离css 生成独立css文件三步之3
		
		new HtmlWebpackPlugin({
			filename: 'test.html',
      template: 'temp.html'
    }),
		
		new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换(HMR)

    new webpack.NamedModulesPlugin(),
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    
	]
};
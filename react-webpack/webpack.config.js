// 生产环境 npm start运行

const webpack = require('webpack');
// 分离css 生成独立css文件三步之1 引入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
	entry: [
		// "__dirname" 是node.js中的一个全局变量，它指向当前执行脚本所在的目录
		__dirname +"/src/npm.js" 
	],
	output:{
		path: __dirname +"/dist", // 输出路径必须是绝对路径
		filename: "bundle.js"
	},
	module:{
		rules:[
		{
			// 一个匹配loaders所处理的文件的拓展名的正则表达式（必须） 多个用|分隔
			test: /\.(js|jsx)$/,
			// loader的名称（必须）一个时用loader:"", 多个时用use: ["css-loader","style-loader"]
			loader: "babel-loader",
			// include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
			exclude: /node_modules/, 
			// 为loaders提供额外的设置选项（可选）
			options: {
				presets: [
					['es2015', {"modules": false}],
					'react'
				]
			}
		}, {
			test: /\.css?$/,
			exclude: /node_modules/,
			// 分离css 生成独立css文件三步之2 不需要style-loader
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}, { 
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
	]
};
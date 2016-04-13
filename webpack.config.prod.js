var webpack = require('webpack');
var path = require('path');
//var autoprefixer = require('autoprefixer');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    
    entry: {
        main: path.resolve(__dirname,'app/main.js'),
        //common: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].min.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }, {//图片文件使用 url-loader 来处理，小于8kb的直接转为base64
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    //postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        //new ExtractTextPlugin('weui.min.css'),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'example/index.html')
        // }),
        new OpenBrowserPlugin({ url: 'http://localhost:7777/' })
    ],

    externals: {    // 指定采用外部 CDN 依赖的资源，不被webpack打包
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
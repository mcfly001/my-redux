/**
 * Created by zyj on 2017/1/5.
 */
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var Extracttextplugin=require("extract-text-webpack-plugin");

module.exports = {
    devtool:'eval-source-map',
    entry:  __dirname + "/app/index.js",
    output: {
        path: __dirname + "/build",
        filename: "build.js?v=[hash]"
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                test:/\.css$/,
                loader:Extracttextplugin.extract({fallback:"style-loader",use:"css-loader"})
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                presets: ['es2015','react','stage-0']
              }
            },
            {
                test:/\.scss$/,
                loader:Extracttextplugin.extract({fallback:"style-loader",use:["css-loader","sass-loader"]})
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin("这个是版本1.0"),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new Extracttextplugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true
    }
}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
	plugins: [
        new MiniCssExtractPlugin(),
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.pug",
            filename:"./index.html"
        }),
    ],
        devServer:{
        contentBase:'./dist',
        port:3001, hot:true,
        devtool: 'inline-source-map',
            stats:{
                children:false,
                maxModules:0   
            }
        },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
        module:{
            rules:[{
                use:[
                    {loader:MiniCssExtractPlugin.loader,
                    options:{
                        esModule:true,
                }
            },
                'css-loader'],
                test:/\.css$/
            },
            {
                test:/\.pug$/,
                use:'pug-loader',    
            },
            {
                test:/\.ts$/,
                use:'ts-loader'
            },
            {
                test:/\.js$/,
                use:'eslint-loader',
                exclude:'/node_modules/'
            },
            ]
        }
}
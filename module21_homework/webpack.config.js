const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
	plugins: [
        new MiniCssExtractPlugin(),
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new StylelintPlugin({
            config: { rules:{"color-no-invalid-hex":true,
        "block-no-empty":true}},
            files: "./src/css/*.css"
        }),
        new HtmlWebpackPlugin({
            template:"./questions_page.html",
            filename:"./index.html"
        }),
        /*new HtmlWebpackPlugin({
            template:"./about_page.html",
            filename:"./about_index.html"
        }),*/
       
    ],
    devServer:{
        contentBase:'./dist',
        port:3001,
        hot:true,
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
                test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
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
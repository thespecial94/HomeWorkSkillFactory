const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path=require("path");
module.exports = {
   // context:path.resolve(__dirname, "./src"),
   mode: 'development',
    entry: './src/index.js'
    /*{bundle: [
        "webpack/hot/dev-server",
        (`${__dirname}/src/index.js`)
        ]}*/,
    output: {
        //path: `${__dirname}/dist`
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        
    },
     devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:9000,
        hot:true
      },
    devtool: 'inline-source-map',
	plugins: [
        new MiniCssExtractPlugin(),
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new StylelintPlugin({
            config: { 
                rules:
                    {
                        "color-no-invalid-hex":true,
                        "block-no-empty":true
                    }
                },
            files: "./src/css/*.css"
        }),
       /*new HtmlWebpackPlugin({
            template:"./questions_page.html",
            filename:"./index.html"
        }),*/
        new HtmlWebpackPlugin({
            template:"./about_page.html",
            filename:"./index.html"
        }),
       
    ],
   
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
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'VueChildIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'VueChildIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'vueChild',
            filename: 'remoteEntry.js',
            exposes: {
                './VueChildWC': './src/VueChildIndex'
            },
            shared: {
                vue: {
                    singleton: true,
                    requiredVersion: deps.vue
                }
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        })
    ],
    devServer: {
        port: 3003,
        contentBase: path.join(__dirname, 'src'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ]
    }
}
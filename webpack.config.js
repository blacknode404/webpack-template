const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'development',
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true,
      hash: true,
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 100000,
    },
    entry: {
        comps: '@comps/bank-card/common.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@comps': path.resolve(__dirname, 'src/components'),
        },
    },
    externals: {
        lodash : {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
    target: 'web',
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new OptimizeCSSAssetsPlugin({
            
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: true,
            }),
        ],
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["@babel/preset-env"],
                        },
                    },    
                ],
            },
            {
                test: /\.css$/i,
                use: [          
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: false,
                            sourceMap: false,
                            importLoaders: 1,
                            localsConvention: 'asIs',
                            onlyLocals: false,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            plugins: [
                                require('autoprefixer'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [                    
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: false,
                            sourceMap: false,
                            importLoaders: 2,
                            localsConvention: 'asIs',
                            onlyLocals: false,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            plugins: [
                                require('autoprefixer'),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            
                        },
                    },
                ],
            },
            {
                test: /\.less$/i,
                use: [                    
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: false,
                            sourceMap: false,
                            importLoaders: 2,
                            localsConvention: 'asIs',
                            onlyLocals: false,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            plugins: [
                                require('autoprefixer'),
                            ],
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            postTransformPublicPath: undefined,
                            emitFile: true,
                            esModule: true,
                        },
                    },
                ],
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            postTransformPublicPath: undefined,
                            emitFile: true,
                            esModule: true,
                        },
                    }, 
                ],
            },
        ],
    },
};
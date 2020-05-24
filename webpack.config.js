const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
        home: '@mpa/name-app/___home/home.js',
        page: '@mpa/name-app/__page/page.js',
        about: '@mpa/name-app/_about/about.js',
        activebox: '@spa/activebox/common.js',
        mongo: '@spa/mongo/common.js',
        comps: '@comps/comp-name/common.js',
    },
    output: {
        filename: '[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@mpa': path.resolve(__dirname, 'src/multi-page-apps'),
            '@spa': path.resolve(__dirname, 'src/single-page-apps'),
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css',
        }),
        new OptimizeCSSAssetsPlugin({
            
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
        ],
        splitChunks: {
//            chunks: 'all',
//            minSize: 30000,
////            minRemainingSize: 0,
//            maxSize: 0,
//            minChunks: 1,
//            maxAsyncRequests: 6,
//            maxInitialRequests: 4,
//            automaticNameDelimiter: '~',
//            cacheGroups: {
//                defaultVendors: {
//                    test: /[\\/]node_modules[\\/]/,
////                    priority: -10,
//                },
//                default: {
//                    minChunks: 2,
//                    priority: -20,
//                    reuseExistingChunk: true,
//                },
//            },
        },
    },
//    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    module: {
        rules: [
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
                            // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
                            modules: false,
                            sourceMap: false,
                            // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                            // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                            importLoaders: 0,
                            localsConvention: 'asIs',
                            onlyLocals: false,
                            esModule: false,
                        },
                    },
//                    {
//                        loader: 'postcss-loader',
//                        options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
//                    },
                    // Can be `less-loader`
                    // The `test` property should be `\.less/i`
//                    {
//                        test: /\.s[ac]ss$/i,
//                        loader: 'sass-loader',
//                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
//            {
//                test: /\.(png|jpe?g|gif|svg|eot|ttf|otf|woff|woff2)$/i,
//                loader: 'url-loader',
//                options: {
//                    limit: 8192,
//            },
//            {
//                test: /\.(png|svg|jpe?g|gif)$/i,
//                use: [
//                    {
//                        loader: 'file-loader',
//                        options: {
//                            name: '[name].[ext]',
//                            outputPath: 'fonts',
////                            publicPath: __webpack_public_path__+ outputPath,
//                            postTransformPublicPath: undefined,
////                            context: 'context',
//                            emitFile: true,
////                            regExp: /\/img\/[a-z0-9]+.svg$/i,
//                            esModule: true,
//                        },
//                    },
//                ],
//            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
//                            publicPath: __webpack_public_path__+ outputPath,
                            postTransformPublicPath: undefined,
//                            context: 'context',
                            emitFile: true,
//                            regExp: /\/fonts\/[a-z0-9\]+\/.svg$/i,
                            esModule: true,
                        },
                    }, 
                ],
            },
        ],
    },
};

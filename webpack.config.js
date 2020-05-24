const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        //Multi Page Applications:
        home: '@mpa/name-app/___home/home.js',
        page: '@mpa/name-app/__page/page.js',
        about: '@mpa/name-app/_about/about.js',
        //Single Page Applications:
        activebox: '@spa/activebox/common.js',
        mongo: '@spa/mongo/common.js',
        //Components
        comps: '@comps/comp-name/common.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
//        extensions: ['.js', '.json', '.css', '.scss', 'sass' ],
        alias: {
            '@mpa': path.resolve(__dirname, 'src/multi-page-apps'),
            '@spa': path.resolve(__dirname, 'src/single-page-apps'),
            '@comps': path.resolve(__dirname, 'src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'styleTag',
                            attributes: {},
                            insert: 'head',
//                            base: true,
                            esModule: false,
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
                    'style-loader',
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

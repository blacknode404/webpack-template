const path = require('path');

module.exports = {
    entry: './src/common.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
//                            esModule: 'false',
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
//            {
//                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
//                loader: 'url-loader',
//                options: {
//                    limit: 8192,
//            },
        ],
    },
};

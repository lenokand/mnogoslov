const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/app.js', './src/app.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8083,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/public'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'smm.html',
            template: './src/html/smm.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'context.html',
            template: './src/html/context.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'development.html',
            template: './src/html/development.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'contentnaya.html',
            template: './src/html/contentnaya.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'insta.html',
            template: './src/html/insta.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'facebook.html',
            template: './src/html/facebook.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html/about.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'review.html',
            template: './src/html/review.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'vacancy.html',
            template: './src/html/vacancy.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: './src/html/contacts.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/html/service.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'portfolio.html',
            template: './src/html/portfolio.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/html/blog.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'article.html',
            template: './src/html/article.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'case.html',
            template: './src/html/case.html',
            inject: 'body'
        }),

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    }
}
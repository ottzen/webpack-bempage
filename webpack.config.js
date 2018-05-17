const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extracktPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss?$/,
                use: extracktPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    })
            }
        ]
    },
    plugins: [
        extracktPlugin
    ]
}
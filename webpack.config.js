var path = require('path'),
    webpack = require('webpack'),
    plugins = [new webpack.HotModuleReplacementPlugin()]

if( process.env.ENV === 'production' ){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
    )
}

module.exports = {
    entry: './dev/app.jsx',
    output: { path: path.join(__dirname, 'app/public/js'), filename: 'app.min.js' },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties'],
                }
            },
        ]
    }
}
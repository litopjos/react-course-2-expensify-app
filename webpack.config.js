const path = require ('path');

const path_public = path.join(__dirname,"public");

console.log(path_public);

module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path_public
   
    },
    devServer : {
        contentBase : path.join(__dirname,"public"),
        historyApiFallback: true
    }

};
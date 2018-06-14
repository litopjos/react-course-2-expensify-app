const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path_public = path.join(__dirname,"public","dist");

console.log(path_public);

module.exports = (env)=>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log(`production-build =  ${isProduction}`);

    return {
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
                    use: CSSExtract.extract({
                        use:[
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap:true
                                    }
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap:true
                                    }
                                }                               

                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ?'source-map' :'inline-source-map',
        output: {
            filename: 'bundle.js',
            path: path_public
       
        },
        devServer : {
            contentBase : path.join(__dirname,"public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    
    };
}


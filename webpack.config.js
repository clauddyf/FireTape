// module.exports = {
//     // 1
//     entry: './src/index.js',
//     // 2
//     output: {
//       path: __dirname + '/dist',
//       publicPath: '/',
//       filename: 'bundle.js'
//     },
//     // 3
//     devServer: {
//       contentBase: './dist'
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.css$/,
//                 use:['style-loader','css-loader']
//             }
//        ]
//     },
//   };

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js?$/,
            exclude: /node_modules/,
            options: {
            presets: ["@babel/preset-env"]
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    watch: true
};
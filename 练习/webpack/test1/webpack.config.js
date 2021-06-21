const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    plugins:[
        new HtmlWebpackPlugin({
            title:'管理资源'
        })
    ],
    output:{
        //filename:'main.js',
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        assetModuleFilename: 'images/[hash:8][ext][query]'  //设置图片文件名
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/i,
                type:'asset/resource',
                
                
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['babel-preset-es2015']
                  }
                }
              }
        ],
    },
}

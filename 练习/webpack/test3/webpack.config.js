const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js',
        print:'./src/print.js'  
    },
    devtool:'inline-source-map',      //追踪错误信息的具体位置
    devServer:{                       //webpack-dev-server 为你提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能
        contentBase:'./dist',
    },
    plugins:[
        new HtmlWebpackPlugin({      
            title:'开发环境'
        }),
    ],
    output:{
        //filename:'main.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        publicPath:'/',
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/i,
                type:'asset/resource'
            },
        ],
    },
}

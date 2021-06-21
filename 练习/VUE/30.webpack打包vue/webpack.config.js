const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports={
    entry:{
        indexJS:'./src/index.js',
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vue打包',
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    output:{
        //filename:'main.js',
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        
    },
    devServer:{
        contentBase:'./dist',
        port:5555,
        
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
                test:/\.vue$/i,
                use:['vue-loader']
            }
        ],
    },
}

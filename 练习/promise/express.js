var express = require('express')

const app = express()


app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('加载成功')
})

app.listen(9000,()=>{
    console.log('9000端口服务启动完毕！');
})
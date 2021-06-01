var express = require('express')

const app = express()

app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

    response.send('Hello Ajax')
})

app.post('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')

    response.send('Hello Ajax POST')
})

app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var data = {
        name:'qiaoyang'
    }
    var str = JSON.stringify(data)
    response.send(str)
})

app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        response.send('居然没超时!')
    },3000)
    
})

app.all('/axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('hello axios!')
    
    
})


app.listen(8000,()=>{
    console.log('8000端口服务启动完毕！');
})
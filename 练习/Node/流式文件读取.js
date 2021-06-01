var fs = require('fs')

var rs = fs.createReadStream('./练习/Node/类型_010 第1页 第1张图片.jpg')
var ws = fs.createWriteStream('pic.jpg')
/*
rs.on("data",function(data){
    ws.write(data)
    
})*/


//但想要把流式读取传入流式写入文件有更简单的方法

rs.pipe(ws)  //把rs的数据都传入ws里
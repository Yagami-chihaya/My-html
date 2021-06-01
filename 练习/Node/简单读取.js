var fs = require('fs')

fs.readFile('./练习/Node/类型_010 第1页 第1张图片.jpg',function(err,data){
    if(!err){
        fs.writeFile('picture.jpg',data,function(err){
            if(!err){
                console.log('写入成功');
            }
        })
    }
})
var fs = require('fs')

var file1 = fs.openSync('./练习/Node/hello3.txt','w') 

console.log(file1);

fs.writeSync(file1,'今天天气不错啊',encoding="utf-8")


var file2 = fs.open('./练习/Node/hello4.txt','w',function(err,fd){
    if(!err){
        fs.write(fd,'卧槽',function(err){
            if(!err){
                console.log('写入成功');
                fs.close(fd,function(err){
                    if(!err){
                        console.log('成功保存并关闭文件');
                    }else{
                        console.log(err);
                    }
                })
            }else{
                console.log(err);
            }
        })
    }
    else {
        console.log(err);
    }
})
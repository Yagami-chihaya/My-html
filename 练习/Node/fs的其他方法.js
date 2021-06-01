var fs = require('fs')


var info = fs.statSync('pic.jpg')   //获取文件的信息并生成一个对象


console.log(info.size);

var stat = fs.stat('pic.jpg',function(err,stat){
    console.log(stat.size);
})

//上面两种方法都是一样的功能

//下面展现下stat()方法其他属性和方法

console.log(info.isFile());
console.log(info.isDirectory());
console.log(info.birthtime);

console.log(fs.readdir(".",function(err,files){         //读取当前目录下的文件和目录，返回的是一个数组
    if(!err){
        console.log(files);
    }
}));

//fs.mkdir  fs.mkdirSync
//fs.rmdir fs.rmdirSync

//fs.rename(oldpath,newpath,callback(){})   fs.renameSync(oldpath,newpath)


fs.watchFile('123.txt',function(curr,prev){         //监视文件状态，回调函数有两个参数curr、prev代表现在和之前文件的信息状态
    console.log("修改前的文件大小:"+prev.size);
    console.log("修改后的文件大小:"+curr.size);
    console.log("文件被修改了");

})
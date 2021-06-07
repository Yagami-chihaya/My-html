const fs = require('fs')
let readFile = function (fileName){
    return new Promise (function(resolve,reject){
        fs.readFile(fileName,function(error,data){
            if(error)reject(error)
            
            resolve(data)
        })
    })
}

const generator = function*(){
    let f1 =yield readFile('./练习/ES6/text1.txt').then(value=>{console.log(value.toString());})
    let f2 =yield readFile('./练习/ES6/text2.txt').then(value=>{console.log(value.toString());})
    
    
}
let g = generator() 
 
g.next() //qiaoyang  
g.next() //yagamichihaya


//async 
let asyncReadfile = async function(){
    let f3 =await readFile('./练习/ES6/text1.txt').then(value=>{console.log(value.toString());})
    let f4 =await readFile('./练习/ES6/text2.txt').then(value=>{console.log(value.toString());})
}

asyncReadfile()  //左边的代码调用了asyncReadFile函数
//然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

//一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

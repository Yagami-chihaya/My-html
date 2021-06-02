const fs = require('fs')

const util = require('util')
const minereadFile = util.promisify(fs.readFile)   //将fs.readFile方法转换为promise形态的函数

/*回调函数的方式
fs.readFile('./练习/promise/01.txt',(err,data1)=>{
    if(err)throw err;
    fs.readFile('./练习/promise/02.txt',(err,data2)=>{
        if(err) throw err;
        fs.readFile('./练习/promise/03.txt',(err,data3)=>{
            if(err) throw err;
            console.log(data1+data2+data3);
        })
    })
})
*/


//async和await结合

//async返回值是一个promise对象，对象的结果由函数返回值决定

//await右侧一般是promise对象，但也可以是其他的数据类型。如果是promise对象，那么await返回的就是promise成功的值。如果是其他类型数据那么就是数据本身
async function main(){
    let data1 = await minereadFile('./练习/promise/01.txt')
    let data2 = await minereadFile('./练习/promise/02.txt')
    let data3 = await minereadFile('./练习/promise/03.txt')
    console.log(data1+data2+data3);
}

main()
console.log(main);
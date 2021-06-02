function newReadFile(path){
    return new Promise((resolve,reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })

}

newReadFile('./练习/promise/类型_010 第1页 第1张图片.jpg').then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})
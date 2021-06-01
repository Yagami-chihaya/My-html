var str = 'qiaoyang'

var str_buf = Buffer.from(str)  //将字符串保存在buffer对象中
console.log(str_buf);

/**var buf1 = new Buffer(10)  //指定buffer对象的长度
console.log(buf1.length);*/

//上面的方法虽然可以指定buffer的大小，但官方并不推荐这样写，而是使用Buffer.alloc()方法进行规定buffer大小


var buf2 = Buffer.alloc(10)
console.log(buf2.length);


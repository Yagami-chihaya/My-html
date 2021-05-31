var math = require("./math.js")

console.log(math.add(1,2));

console.log(exports);    //暴露的属性或函数
console.log(require);    //函数，用来引入外部模块
console.log(module);    //模块本身和引入的模块
console.log(__filename);       //该模块的文件名
console.log(__dirname);         //该模块的所在目录
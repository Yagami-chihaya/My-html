//数组去重

var a = [1,2,3,4,5,5,5,5,5,9]
/*let result = [...new Set(a)]
console.log(result);
console.log(typeof(result));
console.log(new Set(a));
console.log(typeof(new Set(a)));*/

//两个数组求交集
var b = [1,2,2,4,5,7]
/*let result = [...new Set(a)].filter(item=>{
    let b2 = new Set(b)
    if(b2.has(item)){
        return item
    }
})*/


//求并集
var c = [...a,...b]
/*let result = [...new Set(c)]
console.log(result);


console.log(result);*/


//求差

var a1 = [...new Set(a)]

let result = a1.filter(value=>{
    var b1 = new Set(b)
    if(b1.has(value)==false){
        return value
    }
})
console.log(result);
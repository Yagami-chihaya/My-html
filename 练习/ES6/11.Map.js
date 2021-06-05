let m = new Map()

m.set('name','qiaoyang')
m.set('sayname',function(){
    console.log("my name is qioayang");
})

//ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。   
let key = {
    schrool:'安徽文达信息工程系月'
}
m.set(key,['安徽','江苏','浙江'])
console.log(m.get(key));//get获取键的值

let n = new Map()

n.set(['c'],555)
console.log(n.get(['c']));//set和get的键表面上看上去是同一个，但其实是两个不同引用地址的数组,故读取的值是undefined

//获取键值对数量
console.log(m.size);

//遍历
for(let i of m){
    console.log(i);
}

console.log(m);
//删除键值对
//m.delete(key)

//获取
console.log(m.get("name"));

console.log(m);
//清空
//m.clear()

console.log(m);
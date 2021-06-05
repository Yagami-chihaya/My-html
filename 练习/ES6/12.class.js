class phone {
    constructor(brand,price){
        this.brand = brand
        this.price = price
    }
    call(){
        console.log('我可以打电话');
    }
    
}
class Smartphone extends phone{
    constructor(brand,price,color,size){
        super(brand,price)
        this.color = color
        this.size = size
    }
    playGame(){
        console.log("玩游戏");
    }
    photo(){
        console.log("拍照片");
    }
}

var huaweiv30 = new Smartphone('v30',3000,'black','5.5inch')
console.log(huaweiv30);
huaweiv30.call()
huaweiv30.playGame()
huaweiv30.photo()

//get和Set

class person{
    get sayname(){
        console.log("sayname属性被读取了");
        return '我是人'
    }
    set sayname(www){    //该方法需要传个参
        console.log('sayname属性被修改了');
        
    }
}


var p = new person()
console.log(p.sayname);//get修饰的属性可以添加函数，并且调用属性时值就是函数的返回值
p.sayname = 'abab'
console.log(p.sayname);
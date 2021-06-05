

export default{
    name: "qiaoyang",

    sayname:function(){
        console.log(name);
    }
};

//通过babel对es6进行转换
//例如:npx babel 练习/ES6/src -d 练习/ES6/dist/js -d --presets=babel-preset-env

//打包
//npx browserify 练习/ES6/dist/js/13.exports.js -o 练习/ES6/dist/bandle.js
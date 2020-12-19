function addClass(name,addClassName){
    if(!checkClass(name,addClassName))
    name.className=name.className+""+addClassName;
}
function checkClass(name,checkClassName){
    var reg=new RegExp("\\b"+checkClassName+"\\b")
    return reg.test(name.className)
}
function deleteClass(name,deleteClassName){
    var reg=new RegExp("\\b"+deleteClassName+"\\b")
    name.className=name.className.replace(reg,"");  
}
function toggleClass(name,toggleClassName){
    if(checkClass(name,toggleClassName))
    deleteClass(name,toggleClassName)
    else addClass(name,toggleClassName)
}
function move(obj,speed,wayLength,ways,callback){
    clearInterval(obj.start)
    obj.start=setInterval(function(){
        oldValue=parseInt(getComputedStyle(obj,null)[ways]);
        if(speed>0){
           newValue=oldValue+speed;
        if(newValue>=wayLength){
           newValue=wayLength;  
        }
        obj.style[ways]=newValue+"px";
            if(newValue==wayLength){
                clearInterval(obj.start);
                callback();
            } 
        }
        else if(speed<0){
           newValue=oldValue+speed;
        if(newValue<=wayLength){
           newValue=wayLength;  
        }
        obj.style[ways]=newValue+"px";
            if(newValue==wayLength){
                clearInterval(obj.start);
                callback();
            } 
        }
    }, 30);
}

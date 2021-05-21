 

$(function(){

    var $audio = $("audio")
    var player = new Player($audio)

    function getMusicList(){
        $.ajax({
            url:"../resource/musicList.json",
            dataType:"json",
            success:function(data){
                player.musicList = data
                var $musicList=$(".content_list ul");
                $.each(data,function(index,ele){
                    var $item=createMusicItem(index,ele);
                    
                    $musicList.append($item)
                })
                
            },
            error:function(e){
                console.log(e);
            }
        })
    }
    getMusicList();



    $(".content_list").delegate(".list_music","mouseenter",function(){      //鼠标移入移出歌曲时显示关闭菜单
        $(this).find(".list_menu").stop().fadeIn(500)
        $(this).find(".time>span").stop().fadeOut(0)
        $(this).find(".time>a").stop().fadeIn(0)
    });
    $(".content_list").delegate(".list_music","mouseleave",function(){
        $(this).find(".list_menu").stop().fadeOut(500)
        $(this).find(".time>span").stop().fadeIn(0)
        $(this).find(".time>a").stop().fadeOut(0)
    });

    

    
        function checkBox(){
            var p=0;
    
            $(".content_list").delegate(".list_music .check","click",function(){
                console.log(this);         //复选框
                $(this).toggleClass("checked")
                ;
            })
            
            $(".content_list").delegate(".list_title .check","click",function(){
                if(p==0){
                    $(".check").addClass("checked");
                    p=1;
                }
                else if(p==1){
                    $(".check").removeClass("checked");
                    p=0;
                }
            })
        }
        checkBox();
    
    
    

    $(".content_list").delegate(".list_menu","click",function(){
        console.log("奥利给");
    })

//给按钮添加切换效果
    $(".content_list").delegate(".list_menu_play","click",function(){
        var $item = $(this).parents(".list_music")
        console.log($item.get(0).index);
        console.log($item.get(0).music);
        $(this).toggleClass("list_menu_play2") 
        $(this).parents(".list_music").siblings().find(".list_menu_play").removeClass("list_menu_play2")
        
        if ($(this).hasClass("list_menu_play2") == true){
            
            $(".footer>.footer_in>.left_menu>.playToggle").addClass("playToggle2")
            $(this).parents(".list_music").find("div").css("opacity",1)
            $(this).parents(".list_music").siblings().find("div").css("opacity",0.5)
            $(this).parents(".list_music").find(".number").addClass("number2")
            $(this).parents(".list_music").siblings().find(".number").removeClass("number2")
        }
        else {
            $(".footer>.footer_in>.left_menu>.playToggle").removeClass("playToggle2")
            $(this).parents(".list_music").find("div").css("opacity",0.5)
            $(this).parents(".list_music").find(".number").removeClass("number2")
        }

        player.playMusic($item.get(0).index,$item.get(0).music)
    })
    
    $(".footer>.footer_in>.left_menu>.playToggle").click(function(){
        $(this).toggleClass("playToggle2")
    })

    $(".footer>.footer_in>.right_menu>.playMode").click(function(){
        $(this).toggleClass("playMode1")
    })

    $(".footer>.footer_in>.right_menu>.love_off").click(function(){
        $(this).toggleClass("love_on")
    })

    $(".footer>.footer_in>.right_menu>.switch_off").click(function(){
        $(this).toggleClass("switch_on")
    })

    
    

    function createMusicItem(index,music){
        var $item=$("<li class=\"list_music\">\n"+
        "<div class=\"check\"><span></span></div>\n"+
        "<div class=\"number\">"+(index+1)+"</div>\n"+
        "<div class=\"name\">"+music.name+"\n"+
            "<div class=\"list_menu\">\n"+
                "<a href=\"javascript:;\" title=\"播放\" class=\"list_menu_play\"></a>\n"+
                "<a href=\"javascript:;\" title=\"添加\"></a>\n"+
                "<a href=\"javascript:;\" title=\"下载\"></a>\n"+
                "<a href=\"javascript:;\" title=\"分享\"></a>\n"+
            "</div>\n"+
        "</div>\n"+
        "<div class=\"singer\">"+music.singer+"</div>\n"+
        "<div class=\"time\">\n"+
            "<span>"+music.time+"</span>\n"+
            "<a href=\"javascript:;\" title=\"删除\"></a>\n"+
        "</div>\n"+
        "</li>")

        $item.get(0).index = index
        $item.get(0).music = music
        return $item;
    }

    $(".content_list ").mCustomScrollbar();
})

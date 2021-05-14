

$(function(){
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
    
    
    function getMusicList(){
            $.ajax({
                url:"../resource/musicList.json",
                dataType:"json",
                success:function(data){
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

    function createMusicItem(index,music){
        var $item=$("<li class=\"list_music\">\n"+
        "<div class=\"check\"><span></span></div>\n"+
        "<div class=\"number\">"+(index+1)+"</div>\n"+
        "<div class=\"name\">"+music.name+"\n"+
            "<div class=\"list_menu\">\n"+
                "<a href=\"javascript:;\" title=\"播放\"></a>\n"+
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

        return $item;
    }

    $(".content_list ").mCustomScrollbar();
})

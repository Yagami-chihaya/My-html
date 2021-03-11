$(function(){
    
    $(".list_music").hover(function(){          //鼠标移入移出歌曲时显示关闭菜单
        $(this).find(".list_menu").stop().fadeIn(500)
        $(this).find(".time>span").stop().fadeOut(0)
        $(this).find(".time>a").stop().fadeIn(0)
    },function(){
        $(this).find(".list_menu").stop().fadeOut(500)
        $(this).find(".time>span").stop().fadeIn(0)
        $(this).find(".time>a").stop().fadeOut(0)
    })

    $(".list_music>.check").click(function(){          //复选框
        $(this).toggleClass("checked")
    })
    $(".list_title>.check").click(function(){
        $(".check").toggleClass("checked")
    })
    $(".content_list ").mCustomScrollbar();
})

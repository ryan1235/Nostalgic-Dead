$(document).ready(function(){

    $(".btnTop").hide()
    $(window).scroll(function(){
        if($(this).scrollTop() > 150){
            $(".btnTop").fadeIn()
        }else{
            $(".btnTop").fadeOut()
        }
    })
    $(".btnTop").click(function(){
        $("html,body").animate({
            scrollTop: 0
        },1000)
    })
})
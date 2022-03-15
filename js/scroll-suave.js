
$("#suave").click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href')
        targetOffset = $(id).offset().top;
    $('html, boby').animate({
        scrollTop: targetOffset
    }, 1000)
}); 

$("#suave1").click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href')
        targetOffset = $(id).offset().top;
    $('html, boby').animate({
        scrollTop: targetOffset
    }, 1000)
}); 

$("#suave2").click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href')
        targetOffset = $(id).offset().top;
    $('html, boby').animate({
        scrollTop: targetOffset
    }, 1000)
});
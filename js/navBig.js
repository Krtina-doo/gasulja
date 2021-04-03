$(document).ready(function(){
    var gg = $('#gg');
    var soft = $('#soft');
    var ggMenu = $('#gg-menu');
    var softMenu = $('#soft-menu');
    var tog = false;
    gg.on('click', function(){
        softMenu.hide();
        soft.removeClass('bg-nav');
        ggMenu.slideToggle('fast');
        ggMenu.css('display','flex');
        $(this).toggleClass('bg-nav');
        $('#gg .arrow').toggleClass('okret');
    })
    soft.on('click', function(){
        ggMenu.hide();
        gg.removeClass('bg-nav');
        softMenu.slideToggle('fast');
        softMenu.css('display','flex');
        $(this).toggleClass('bg-nav');
        $('#soft .arrow').toggleClass('okret');
        return tog = true;
    })
})
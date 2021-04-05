$(document).ready(function(){
    var gg = $('#gg');
    var soft = $('#soft');
    var ggMenu = $('#gg-menu');
    var softMenu = $('#soft-menu');
    var ham = $('#hamburger');
    var hamMenu = $('#ham-menu');


    gg.on('click', function(){
        softMenu.hide();
        soft.removeClass('bg-nav');
        ggMenu.slideToggle('fast');
        ggMenu.css('display','flex');
        $(this).toggleClass('bg-nav');
        $('#gg .arrow').toggleClass('okret');
    });
    soft.on('click', function(){
        ggMenu.hide();
        gg.removeClass('bg-nav');
        softMenu.slideToggle('fast');
        softMenu.css('display','flex');
        $(this).toggleClass('bg-nav');
        $('#soft .arrow').toggleClass('okret');
    });
    ham.on('click', function(){
        hamMenu.toggle('fast');
        $(this).toggleClass('hamklik');
        $('body').toggleClass('scroll');
    });
})
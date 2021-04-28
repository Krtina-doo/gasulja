$(document).ready(function(){
    var tipkaNazad =  $('#roll-b-tipka');
    var tipkaNapr =  $('#roll-tipka');

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 24) {
            $('#nav-big').addClass('navscroll');
            $('#gg-menu').addClass('menuscroll');
            $('#soft-menu').addClass('menuscroll');
        } else {
            $('#nav-big').removeClass('navscroll');
            $('#gg-menu').removeClass('menuscroll');
            $('#soft-menu').removeClass('menuscroll');
        }
    });
    
    $('.item').hover(function(){
        $(this).toggleClass('gore');
    });

    tipkaNapr.click(function(){
        var poz = $('.roll').position();
        console.log(poz.left);
        switch (poz.left){
            case 0:
                $('.roll').css('left', '-=350');
                tipkaNazad.show();
                $(this).show();
            break;
            case -350:
                $('.roll').css('left', '-=350');
                $(this).hide();
            break;
        }
    });

   tipkaNazad.click(function(){
        var poz = $('.roll').position();
        switch (poz.left){
            case -350:
                $('.roll').css('left', '+=350');
                tipkaNazad.hide();
                if(tipkaNapr.css('display')=='none'){
                    tipkaNapr.show();
                }
            break;
            case -700:
                $('.roll').css('left', '+=350');
            break;
        }
    });
})
$(document).ready(function(){
    var tipkaNazad =  $('#roll-b-tipka');
    var tipkaNapr =  $('#roll-tipka');
    $('.item').hover(function(){
        $(this).toggleClass('gore');
    });

    tipkaNapr.click(function(){
        var poz = $('.roll').position();
        console.log(poz.left);
        switch (poz.left){
            case 0:
                $('.roll').css('left', '-=250');
                tipkaNazad.show();
                $(this).show();
            break;
            case -250:
                $('.roll').css('left', '-=250');
                $(this).hide();
            break;
        }
    });

   tipkaNazad.click(function(){
        var poz = $('.roll').position();
        switch (poz.left){
            case -250:
                $('.roll').css('left', '+=250');
                tipkaNazad.hide();
                if(tipkaNapr.css('display')=='none'){
                    tipkaNapr.show();
                }
            break;
            case -500:
                $('.roll').css('left', '+=250');
            break;
        }
    });
})
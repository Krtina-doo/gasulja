$(document).ready(function(){
    var gg = $('#gg');
    var soft = $('#soft');
    var ggMenu = $('#gg-menu');
    var softMenu = $('#soft-menu');
    var ham = $('#hamburger');
    var hamMenu = $('#ham-menu');
    var suppMenu = $('#supp-menu');
    
    // ANIMACIJA STRELICA NA DESKTOP NAVU
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

    // FIKSIRANJE BODY SCROLLA NA PALJENJE MENIJA
    ham.on('click', function(){
        hamMenu.toggle('fast').addClass('mobmeni');
        $(this).toggleClass('hamklik');
        $('body').toggleClass('scroll');
    });

    // GAMING GEAR ANIMACIJA IN
    $('#ham-menu a:nth-child(1)').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'-105%'
        });
        ggMenu.addClass('mobmeni').css('left','100%').show().animate({
            'transition':'0.3s ease',
            'left':'0'
        });
    });

    // SOFTWARE ANIMACIJA IN
    $('#ham-menu a:nth-child(2)').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'-105%'
        });
        softMenu.addClass('mobmeni').css('left','100%').show().animate({
            'transition':'0.3s ease',
            'left':'0'
        });
    });

    // SUPPORT ANIMACIJA IN
    $('#ham-menu a:last-child').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'-105%'
        });
        suppMenu.addClass('mobmeni').css('left','100%').show().animate({
            'transition':'0.3s ease',
            'left':'0'
        });
    });

    // GAMING GEAR ANIMACIJA NAZAD
    $('#gg-menu a:first-child').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'0'
        });
        $('#ham-menu div').css('padding','0');
        ggMenu.animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
    });

    // SOFTWARE MENI ANIMACIJA NAZAD
    $('#soft-menu a:first-child').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'0'
        });
        softMenu.animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
    });

    // SUPPORT MENI ANIMACIJA NAZAD
    $('#supp-menu a:first-child').click(function(e){
        e.preventDefault();
        hamMenu.animate({
            'transition':'0.3s ease',
            'left':'0'
        });
        suppMenu.animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
    });

    // VRAĆANJE NA POČETNO AKO SE KLIKNE HAM MENI
    ham.click(function(){
        ggMenu.hide().animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
        softMenu.hide().animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
        suppMenu.hide().animate({
            'transition':'0.3s ease',
            'left':'105%'
        });
    });
    ham.click(function(){
        hamMenu.animate({
            'left':'0'
        });
    });
})
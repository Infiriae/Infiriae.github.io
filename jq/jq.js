$(document).ready(function() {
    var slide = 1;
    var theme = 0;
    $('#pushitout').hide();
    $('#pushitout2').fadeOut('');
    // $('body').hide();
    // var msg = window.prompt("What's your login?", "");
    // $('body').show();

    // $('#you').html('<img src="' + msg + '">');

    $('a').click(function() {
        alert('You are now leaving this page!');
    });

    $('#login').submit(function() {
        var i = ($("input").first().val());
        $('#picture').html('<img src="' + i + '">');
        console.log('failure');
    });

    $('#you').click(function() {
        $('#Uname').text('Name?');
        console.log('failure');
    });

    $('#show1').click(function() {
        $('p.thing').show();
    });

    $('#show2').click(function() {
        // $('#pushitout').slideToggle();
        if (slide === 0) {
            slide = 1;
            $('#pushitout').hide('');
            $('#pushitout2').fadeOut('');
            console.log(slide);
        } else {
            slide = 0;
            $('#pushitout').show('');
            $('#pushitout2').fadeIn('');
            console.log(slide);
        }
    });

    $('#theme').click(function() {
        // $('#pushitout').slideToggle();
        if (theme === 0) {
            theme = 1;
            $('#theme').text('No change it back.');
            $('p, h1').addClass('text-light');
            $('body').removeClass('bg-info');
            $('body').addClass('bg-dark');
            console.log(theme);
        } else {
            theme = 0;
            $('#theme').text('Nevermind. I like it dark.');
            $('p, h1').removeClass('text-light');
            $('body').removeClass('bg-dark');
            $('body').addClass('bg-info');
            console.log(theme);
        }
    });


});
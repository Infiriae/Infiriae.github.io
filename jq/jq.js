$(document).ready(function() {
    var slide = 1;
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


});
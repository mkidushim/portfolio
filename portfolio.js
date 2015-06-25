var email_name = 'mkidushim';
var server_name = '@gmail.com';
var clicked = true;
var ss_click = true;
var calc_pressed = true;
var tic_pressed = true;
var memory_pressed = true;
function send_confirm (){
    $.ajax({
        url: 'mail_withmailer.php',
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        },
        method: 'POST',
        dataType: 'JSON',
        success: function(response) {
            console.log(response);
            $("#dialog-message").dialog({
                    modal: true,
                    draggable: false,
                    resizable: false,
                    position: ['center', 'top'],
                    width: 400,
                    title: "Congratulations!",
                    open: function(){
                        $(this).html("Email Sent")
                    },
                    dialogClass: 'ui-dialog-osx',
                });
        }
    });
}
function email() {
    console.log(email_name + server_name)
    $('#email').text(email_name + server_name);

}

function show_calc() {
    $('.roman > li img.calc').toggleClass('show');

}

function show_TTT() {
    $('.roman > li img.tic-tac-toe').toggleClass('show');

}

function show_memory() {
    $('.roman > li img.memory_match').toggleClass('show');

}

function show_sweet() {
    $('.roman > li img.sweet_corner').toggleClass('show');

}

function show_proto() {
    $('.roman > li img.prototypes').toggleClass('show');
}

function show_SGT() {
    $('.roman > li img.C4SGT').toggleClass('show');
}

function show_TDL() {
    $('.roman > li img.C4TDL').toggleClass('show');
}

function Show() {
    if (clicked) {
        $('.screen_shots').removeClass('screen_shots').addClass('hidden');
        $('.title_hide').removeClass('title_hide').addClass('new_title');
        clicked = false;
    } else {
        $('.hidden').toggleClass('title_hide');
        $('.new_title').toggleClass('title_hide');
    }
}

$(document).ready(function() {
    $('body').on('click', '.home', function() {

        console.log('Home btn works')
        $.ajax({
            url: 'home.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                $('#email').text(email_name + server_name);
                console.log('success:', response)
                $('.main_content').html(response)
                email();
                $('.calc_b').click(show_calc);
                $('.tic-tac-toe_b').click(show_TTT);
                $('.memory_match_b').click(show_memory);
                $('.sweetcorner_b').click(show_sweet);
                $('.prototypes_b').click(show_proto);
                $('.C4SGT').click(show_SGT);
                $('.C4TDL').click(show_TDL);
            }
        });
    })
    $('body').on('touchstart', '.home', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'home.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                email();
                console.log('success:', response)
                $('.main_content').html(response)
                email();
            }
        });
    })
    $('body').on('click', '.resume > span', function() {
        console.log('hover')
        $('.ss_img').toggleClass('show')
    })
    $('body').on('touchstart', '.resume > span', function() {
        console.log('hover')
        $('.ss_img').toggleClass('show')
    })
    $('.nav').on('click', '.about', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'about.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                console.log('success:', response)
                $('.main_content').html(response)
            }
        });
    })
    $('body').on('touchstart', '.about', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'about.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                console.log('success:', response)
                $('.main_content').html(response)
            }
        });
    })
    $('body').on('click', '.skills', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'skills.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                console.log('success:', response)
                $('.main_content').html(response)
            }
        });
    })
    $('body').on('touchstart', '.skills', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'skills.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                console.log('success:', response)
                $('.main_content').html(response)
            }
        });
    })
    $('body').on('click', '.contact', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'contact.html',
            dataType: 'html',
            cache: false,
            success: function(response) {

                console.log('success:', response)
                $('.main_content').html(response)
                $('body').on('click','#btn2',function (){
                    send_confirm();
                });
            }
        });
    })
    $('body').on('touchstart', '.contact', function() {
        console.log('Home btn works')
        $.ajax({
            url: 'contact.html',
            dataType: 'html',
            cache: false,
            success: function(response) {
                console.log('success:', response)
                $('.main_content').html(response)
            }
        });
    })
    $('.calc_b').click(show_calc);
    $('.tic-tac-toe_b').click(show_TTT);
    $('.memory_match_b').click(show_memory);
    $('.sweetcorner_b').click(show_sweet);
    $('.prototypes_b').click(show_proto);
    $('.C4SGT').click(show_SGT);
    $('.C4TDL').click(show_TDL);

    // $('.calc_b').touchstart(show_calc);
    // $('.tic-tac-toe_b').touchstart(show_TTT);
    // $('.memory_match_b').touchstart(show_memory);
    // $('.sweetcorner_b').touchstart(show_sweet);
    // $('.prototypes_b').touchstart(show_proto);
    // $('.C4SGT').touchstart(show_SGT);
    // $('.C4TDL').touchstart(show_TDL);
});

var email_name = 'mkidushim';
var server_name = '@gmail.com';
var clicked = true;
var ss_click = true;

function email() {
    console.log(email_name + server_name)
    $('#email').text('E-mail' + ':' + ' ' + (email_name + server_name));

}

function show_r() {
    $('.roman > li img.calc').css({
        'display': 'inline-block',
        'width': '100px',
        'height': '100px'
    })

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
                console.log('success:', response)
                $('.main_content').html(response)
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
                console.log('success:', response)
                $('.main_content').html(response)
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
    $('body').on('click', '.about', function() {
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
    $('body').on('click', '.roman > li a', function() {
        show_r();
        console.log('github screen_shots')
    })
$('body').on('touchstart', '.roman > li a', function() {
        show_r();
        console.log('github screen_shots')
    })
});

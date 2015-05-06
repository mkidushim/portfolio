var email_name = 'mkidushim';
var server_name = '@gmail.com';

function email() {
    console.log(email_name + server_name)
    $('#email').text('E-mail' + ':' + ' ' + (email_name + server_name));

}


function Show() {
    $('.screen_shots').removeClass('screen_shots').addClass('hidden');
    $('.title_hide').removeClass('title_hide').addClass('new_title');
}

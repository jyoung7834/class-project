'use strict'


function selectFav() {
    var response = prompt('Do you like coffee and pumpkins? Yes or No')
    var message;

if (response ==='Yes') {
    message = 'You\'re in the right place!'
}   else if (response === 'No') {
    message = "Stick around, you may change your mind!";
}   else {
    message = 'Cheers!!!';
}

return document.write('<h3>'+ message +'</h3>');
}

selectFav();
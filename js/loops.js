'use strict'


function selectFavAgain() {
    var response = prompt('Do you like Beer or Wine?')
    var message;

    while(response != 'Beer'){
     message = prompt('Do you like Beer or Wine? CHOOSE Beer!')
    }

    if (response === 'Beer') {
     message = 'Have no fear!';
    } else if (response === 'Wine') {
    message = 'Wine is fine but it\'s Beer time!';
    }   else {
    message = 'Here\'s mud in your eye';
    }

    return document.write('<h3>' + message + '</h3>');
}

selectFavAgain();




    
"use strict"


function getGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'It\'s happy hour!';
    }   else if (hourNow > 12 ) {
            greeting = 'Beer or Wine?';
    }   else if (hourNow > 0) {
            greeting = 'No better time than the present!';
    }   else {
            greeting = 'Cheers!';
    }
        
    return document.write('<h3>' + greeting + '</h3>'); 

}

getGreeting();

// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'It\'s happy hour!';
// }   else if (hourNow > 12 ) {
//         greeting = 'Beer or Wine?';
// }   else if (hourNow > 0) {
//         greeting = 'No better time than the present!';
// }   else {
//         greeting = 'Cheers!';
// }
    
// document.write('<h3>' + greeting + '</h3>');    
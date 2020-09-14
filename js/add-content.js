"use strict"

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'No better time than the present!';
}   else if (hourNow > 12 ) {
        greeting = 'Lets have lunch too!';
}   else if (hourNow > 0) {
        greeting = 'Its happy hour somewhere!';
}   else {
        greeting = 'Cheers!';
}
    
document.write('<h3>' + greeting + '</h3>');    
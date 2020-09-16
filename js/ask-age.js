


{/* <p>Input your age and click the button:</p>

<input id="age" value="18">

<button onclick="myFunction()">Try it</button>

<p id="demo"></p> */}


// function askAge() {
//   var age, legal;
//   age = document.getElementById("age").value;
//   legal = (age >= 21) ? "Too young":"Old enough";
//   return document.getElementById("demo").innerHTML = legal + " to consume beer.";
// }

// askAge();

function getGreeting() {
    var age = prompt('What is your age?');
    return document.write('<h3>Hello ' + age + '!</h3>');
    
    
    // var today = new Date();
    // var hourNow = today.getHours();
    // var greeting;
    
    // if (age >= 21) {
    //     greeting = 'It\'s happy hour';
    // }   else if (hourNow > 12 ) {
    //         greeting = 'Beer or Wine?';
    // }   else if (hourNow > 0) {
    //         greeting = 'No better time than the present!';
    // }   else {
    //         greeting = 'Cheers!';
    // }
        
    // return document.write('<h3>' + greeting + '</h3>'); 

}

getGreeting();
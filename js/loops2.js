'Use Strict'


function getSelection() {
  var response = prompt('Do you like Beer or Wine?');
  var item;

  while(response != 'Beer' && response != 'Wine') {
    response = prompt('Do you like Beer or Wine? CHOOSE ONE');
  }

  if (response === 'Beer') {
    item = '<img src="images/yes.png">';
  } else if (response === 'Wine') {
    item = '<img src="images/wine.png">' ;
  } 

  return item;
}

function getCount() {
  var count = prompt('Great! How many would you like?');
  while(isNaN(count) || count === '') {
    count = prompt("PLEASE enter a number. How many would you like?");
  }
  return count;
}

function showOrder() {
  var result = '';
  var itemType = getSelection();
  var total = getCount();

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
    console.log(result);
  }

  return document.write(result);
}

showOrder();
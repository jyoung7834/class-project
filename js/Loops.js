


function getProduct()
var response = prompt('Would you rather have a Beer or Wine?');
var item;

while (response !='Beer' && response != 'Wine') {
    item = prompt('Would you rather have Beer or Wine? Choose one')
    }

    if (response === 'Wine') {
        item = '<img src=images/yes.PNG>';
    }   else if (response ==='wine') {
        item = '<imag src="../images/wine.PNG">';
    }

    return item;
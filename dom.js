var intro = document.getElementsByClassName('intro');

console.log(intro[0].innerHTML);


var myInput = document.getElementById('myText');


function displayInput() {
    var input = document.getElementById('myText').value;
    document.getElementsByClassName('intro')[0].innerHTML = input;
}




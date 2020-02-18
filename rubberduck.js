var color = 0;
var size = 0;
var hat = 0;
var torso = 0;
var jewelry = 0;
var expression = 0;

function numChange(value, num){  
    value += num;

    //all available options
    if(value <= 0){ //min -1
        value = 5;
    } else if(value >= 6){ //max -1
        value = 1;
    }
}

if(!localStorage.getItem('hat')) {
    populateStorage();
  } else {
    rubberDuckUpdate();
}

function rubberDuckUpdate() {
    var color1 = localStorage.setItem('color', color1);
    var size1 = localStorage.setItem('size', size1);
    var hat1 = localStorage.setItem('hat', hat1);
    var torso1 = localStorage.setItem('torso', torso1);
    var jewelry1 = localStorage.setItem('jewelry', jewelry1);
    var expression1 = localStorage.setItem('expression',expression1);

    var newHTML = "<img id = 'hat' src = 'color" + color1 + ".png>\
    <img id = 'hat' src = 'size" + size1 + ".png>\
    <img id = 'hat' src = 'hat" + hat1 + ".png>\
    <img id = 'hat' src = 'torso" + torso1 + ".png>\
    <img id = 'hat' src = 'jewelry" + jewelry1 + ".png>\
    <img id = 'hat' src = 'expression" + expression + ".png>";
    document.getElementById('rubberDuckContainer').insertAdjacentHTML("beforeend", newHTML); 
    console.log(rubberDuckContainer);
}

function populateStorage() {
    localStorage.setItem('color', '');
    localStorage.setItem('size', '');
    localStorage.setItem('hat', '');
    localStorage.setItem('torso', '');
    localStorage.setItem('jewelry', '');
    localStorage.setItem('expression', '');
  
    rubberDuckUpdate();
}
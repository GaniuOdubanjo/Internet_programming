//solution 1
function myClickEvent() {
  alert('The button was pressed');
 }
 function myLoadFunction() {
  var element = document.getElementById('circle');
  element.addEventListener('click', myClickEvent);
 }
 document.addEventListener('DOMContentLoaded', myLoadFunction);

//solution 2 changes the color to blue
function myClickEvent(){
    var element= document.getElementById('circle');
    element.style.backgroundColor='blue';
}
  function myloadEvent(){
    var element= document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
 }

 document.addEventListener('DOMContentLoaded', myloadEvent);   
 

 // solution 3 opacity
 function myClickEvent(){
    var element= document.getElementById('circle');
    element.style.opacity= 0.5; 
}

 function myloadEvent(){
    var element= document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
 }

 document.addEventListener('DOMContentLoaded', myloadEvent)

// solution 4

function myClickEvent(){
    var element= document.getElementById('circle');
    element.style.opacity= 1; 
}

 function myloadEvent(){
    var element= document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity= 0.5; 
 }

 document.addEventListener('DOMContentLoaded', myloadEvent);

//solutiom 5 become invisible  after some time

function myClickEvent(){
    var element= document.getElementById('circle');
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity= circleOpacity - 0.1;
}

 function myloadEvent(){
    var element= document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity= 0.5; 
 }

 document.addEventListener('DOMContentLoaded', myloadEvent);

 //solution 6
function myInterval(){
    var element= document.getElementById('circle');
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity= circleOpacity - 0.01;
}
function myClickEvent(){
    setInterval(myInterval, 10);
}

 function myloadEvent(){
    var element= document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity= 1; 
 }

 document.addEventListener('DOMContentLoaded', myloadEvent);

// Solution 7 moving to the left.
function mykeydown(){
    var element= document.getElementById('circle');
    var positionLeft = element.offsetLeft;
   
    element.style.left= positionLeft + 10 + "px";
}

 function myloadEvent(){
    document.addEventListener('keydown', mykeydown);
 }

 document.addEventListener('DOMContentLoaded', myloadEvent);
// solution 8 

function mykeydown(event){
   console.log(event.keyCode);
    element.style.left= positionLeft - 10 + "px";
}
function mykeydown(event){
    console.log(event.keyCode);
    
 } 
 function myloadEvent(){
    document.addEventListener('keydown', mykeydown);
 }

 document.addEventListener('DOMContentLoaded', myloadEvent)

//solution 9

function mykeydown(event){
  if(event.keyCode==37){
    setInterval(moveLeft, 10);
  }
  if(event.keyCode==38){
    setInterval(moveUp, 10);
  }
  if(event.keyCode==40){
    setInterval(moveDown, 10);
  }
  if(event.keyCode==39){
    setInterval(moveRight, 10);
  }
}
function myloadEvent(){
    document.addEventListener('keydown', mykeydown);
 }
    
function moveUp(){
    var element=document.getElementById('circle');
    var positionTop= element.offsetTop;
    element.style.top = positionTop -1 + 'px';
}

function moveDown(){
    var element=document.getElementById('circle');
    var positionTop= element.offsetTop;
    element.style.top = positionTop +1 + 'px';
}
function moveLeft(){
    var element=document.getElementById('circle');
    var positionLeft= element.offsetLeft;
    element.style.left = positionTop -1 + 'px';
}

function moveRight(){
    var element=document.getElementById('circle');
    var positionLeft= element.offsetLeft;
    element.style.left = positionLeft +1 + 'px';
}
 document.addEventListener('DOMContentLoaded', myloadEvent);


 // solution 10

var interval=0;

function mykeydown(event){
    
    clearInterval(interval);

  if(event.keyCode==37){
    setInterval(moveLeft, 10);
  }
  if(event.keyCode==38){
    setInterval(moveUp, 10);
  }
  if(event.keyCode==40){
    setInterval(moveDown, 10);
  }
  if(event.keyCode==39){
    setInterval(moveRight, 10);
  }
}
function myloadEvent(){
    document.addEventListener('keydown', mykeydown);
 }
    
function moveUp(){
    var element=document.getElementById('circle');
    var positionTop= element.offsetTop;
    element.style.top = positionTop -1 + 'px';
}

function moveDown(){
    var element=document.getElementById('circle');
    var positionTop= element.offsetTop;
    element.style.top = positionTop +1 + 'px';
}
function moveLeft(){
    var element=document.getElementById('circle');
    var positionLeft= element.offsetLeft;
    element.style.left = positionTop -1 + 'px';
}

function moveRight(){
    var element=document.getElementById('circle');
    var positionLeft= element.offsetLeft;
    element.style.left = positionLeft +1 + 'px';
}
 document.addEventListener('DOMContentLoaded', myloadEvent);
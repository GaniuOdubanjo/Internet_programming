// Exercise 1

function print5() {
    alert(1);
    alert(2);
    alert(3);
    alert(4);
    alert(5);
   }
   print5();
   print5();

//Exercise 2
   function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
   }
  
   print5();
   print5();

   //Exercise 3

var element = document.getElementById('pageheading');
element.firstChild.nodeValue = 'New Heading';

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);

   // Exercise 4

   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue ='New Heading';
    var element1 = document.getElementById('paragraph');
    element1.firstChild.nodeValue = 'New paragraph text';

   }
   
   document.addEventListener('DOMContentLoaded', myLoadFunction);
     
   //Exercise 5
   function myClickFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text';
   }
   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', myClickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);

//Exercise 6

   function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
   }
   function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
   }
   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);

//Exercise 7
   function clickFunction() {
    var element = document.getElementById('myinput');
    alert(element.value);
   }
   function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   
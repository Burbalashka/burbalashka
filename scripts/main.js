var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/logo_one_piece_dw.jpg') {
    myImage.setAttribute('src', 'images/two_years_later_one_piece.jpg');
  } else {
    myImage.setAttribute('src', 'images/logo_one_piece_dw.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please, enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Anime description, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Anime description, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

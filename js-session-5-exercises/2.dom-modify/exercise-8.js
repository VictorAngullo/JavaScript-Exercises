var secondDiv = document.querySelectorAll('div')[1];
var myParagraph = document.createElement('p');
myParagraph.textContent = "Voy en medio!";
document.body.insertBefore(myParagraph, secondDiv);

 var apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

 var myList = document.createElement('ul')
 
 apps.forEach  (function (elem) {
     var newLi = document.createElement('li')
     newLi.innerText = elem
     myList.appendChild(newLi)
 })
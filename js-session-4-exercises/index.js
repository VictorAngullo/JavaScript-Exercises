var counter = 0
var myDiv = document.getElementById("myDiv")
myDiv.style = "background-color: red; color: white;"

myDiv.addEventListener("click", function() {
    counter++
    console.log(counter)
})
var timer = setInterval(function() {
    console.log("My fucking intervalito")
}, 1000);

// Ejercicio 2.

var timer2 = setTimeout(function() {
    console.log("My fucking timeOut")
}, 3000);

// Ejercicio 3
var timer3 = 0

var bombastic = setInterval(function() {
    timer3++
    if (timer3 <= 10) {
        console.log("My fucking intervalito" + timer3)
    }else {
        clearInterval(bombastic)
    }
}, 2500);

// Ejercicio 5

var randomTime = Math.floor( (Math.random() * (7000 - 1000) + 1000))

var timer4 = setTimeout(function() {
    console.log(randomTime)
}, randomTime);


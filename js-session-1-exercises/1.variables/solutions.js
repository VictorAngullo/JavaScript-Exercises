// 1.
var carName = "Volvo"


// 2.
var x = 50


// 3.
var x = 5
var y = 10
var z = x + y


// 4.
const character = {name: 'Jack Sparrow', age: 10};
character = {name: 'Jack Sparrow', age: 25}

// 5.
var firstName = 'Jon'; 
var lastName = 'Snow'; 
var age = 24
console.log ("Soy"+firstName+lastName,+"y tengo"+age+"y me gustan los lobos")


// 6.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price+toy2.price)


// 7.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
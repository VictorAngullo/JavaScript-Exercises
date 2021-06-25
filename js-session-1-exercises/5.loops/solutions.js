// 1.
for ( var i = 0; i <= 9; i++) {
    console.log (i);
}

// 2.
for ( var i = 0; i <= 9; i++) {
    if (i % 2 == 0) {
        console.log (i);
    }
}


// 3.

// extras 

const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
var underAge =[];
var adult =[];

for ( var i = 0; i < users.length; i++) {
        if ( users[i].years < 18 ) {
            underAge.push (users[i].name);
        } else {
            adult.push(users[i].name);
        }
}
console.log("menores de edad:", underAge);
console.log("mayores de edad:", adult);


// segundo extra

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (var i = 0; i < foodSchedule.length; i++) {
   if (foodSchedule[i].isVegan == false) {
       var newFruit = fruits.shift();
       if (newFruit !== undefined) {
           foodSchedule[i].name = newFruit;
           foodSchedule[i].isVegan = true;
       }
   } else {
       console.log("No me queda más fruta")
   }
    
}
console.log(foodSchedule);







// tercero extra


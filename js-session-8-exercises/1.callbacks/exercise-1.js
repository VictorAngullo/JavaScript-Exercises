const numbersList = [];

function sum(a, b) {
    return a + b
    console.log(sum);
}

function substract(a, b) {
    return a - b
    console.log(substract);
}


function father(a, b, callback) {
    if (!a || !b) {
        setTimeout(() => {
          throw new Error('My pija');
        }, 2000);
      } else {
        setTimeout(() => {
          numbersList.push(callback(a, b));
        }, 2000);
      }
    }

father(4, 3, sum);


father(3, 2, sum);


father(4, 3, substract);

father(6, 3, substract);

console.log(numbersList);


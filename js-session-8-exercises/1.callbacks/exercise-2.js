const userAnwsers = [];

function confirmExample(description){
  return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, myFunction){
userAnwsers.push(myFunction(description));
console.log(userAnwsers);
}


father('Soy un texto', promptExample);
father('Soy un texto', confirmExample);
// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');
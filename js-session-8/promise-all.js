const retardedFunction = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json();
        });
};

const theBigLewosky = () => {
    return new Promise((resolve, reject) => {
        resolve('resolve The Big Lewosky');
    })
}

const trueGrit = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve Promesa true grit');
    }, 2500);
});

Promise.all([retardedFunction(), trueGrit, theBigLewosky()])
    .then((response) => {
        console.log('then', response);
    })
    .catch((error) => {
        console.log('catch', error);
    })
    .finally(() => {
        console.log('EJECUTO FINALLY');
    })

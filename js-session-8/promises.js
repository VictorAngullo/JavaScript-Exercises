// Promesas.
const list = ["Jose", "Alberto", "Cristian"];

const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
        if(!list) {
            reject('No se encuentra el array');
        } else {
            setTimeout(() => {
                list.push(item);
                resolve(list);
            }, 2000)
        }
    })

    return promise;
}

// addItem("Diego", list)
//     .then((list) => {
//         console.log('list', list);
//         return 'Hola';
//     })
//     .then((lore) => {
//         console.log('imprimo res ', lore);
//         return 'Ya no soy undefined';
//     })
//     .then((res) => {
//         console.log('Imrpimo RES en tercero.then', res);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })
//     .finally(() => {
//         console.log('Promesa Terminada');
//     })

let promise = new Promise((resolve, reject) => {

    // setTimeout(() => {
    //     console.log('timeout')
    // }, 1800);
    // reject(new Error('Las promesas son muy difíciles'))

    setTimeout(() => resolve("3s "), 3000);
});

promise
    .then((asdasdasd) => {
        console.log('promesa completada !!');
        console.log(asdasdasd);
        return 'Victor';
    })
    .then(nombre => {
        console.log(nombre);
    });

const error = new Error('este es el error');

// console.log(error);

const pepe = () => {
    console.log('Invocaré a Pepe cada vez que haya un error');
}

// try {
//     const error = null.nombre;
// } catch (error) {
//     console.log('error', error);

//     setTimeout(() => {
//         pepe();
//     }, 2000)
// }

try {
    const error = new Error('APPLICATION ROTA');
    pepe.hola.adios = 1234;
} catch (err) {
    console.log('catch -> try', err)
}
const people = ["Laura", "Victor", "Juan", "Lola", "Ignacio"];

// callback
// const cb = (person) => `Hola, me llamo ${person}`;

// const saludos = people.map(cb);

// console.log(saludos);

const pepe = () => {
    return 'Pepe';
};

const yeray = (joseLuis) => {
    const name = joseLuis();

    console.log(`Hola, me llamo ${name}`);
}

// yeray(pepe);

const callbackExample = (list, message) => {
    console.log(`El listado final es: ${list.join(', ')} -`, message);
}

const addItemTriggerCallback = (item, callback, list) => {
    if(!list) {
        // console.log('No existe el array');
        return new Error('No existe array')
    } else {
        setTimeout(() => {
            list.push(item);
    
            callback(list, 'OK');
        }, 2000)
    }
};

const list = ['Alberto', 'Jose'];

addItemTriggerCallback('Mario', callbackExample);
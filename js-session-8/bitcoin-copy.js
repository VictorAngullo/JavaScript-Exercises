const init = () => {
    console.log('dom loaded');
    // EJERCICIO: crear elemnto <ul>
    const pepe = document.createElement('ul');
    document.body.appendChild(pepe);
    const LI = document.createElement('li');
    LI.id = "bitcoin-list"
    pepe.appendChild(LI)

    getBitcoinPriceAndRenderElement();

    setInterval(() => {
        getBitcoinPriceAndRenderElement();
    }, 60 * 1000);
}

const getBitcoinPriceAndRenderElement = async () => {
    // Coger precio de bitcoin
    const price = await getBitcoinPrice();

    // Por una parte la fecha
    const actualDate = getDate();
    console.log('date: ', actualDate);
    document.getElementById('bitcoin-list').innerHTML = `Fecha: ${actualDate} - Precio: ${price}€`

}

const getBitcoinPrice = () => {
    // Obtener el precio de bitcoin
    // https://api.coindesk.com/v1/bpi/currentprice.json
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log('data', data);
            return data.bpi.EUR.rate_float.toFixed(2);
        })
        .catch((error) => {
            console.log(`Error en la petición a la API de bitcoin: ${error}`);
        });
}

// const getTwoDigits = (number) => {
//     if (number < 10) {
//         return `0${number}`
//     } else {
//         return number;
//     }
// };

const getTwoDigits = (number) => number < 10 ? `0${number}` : number;

const getDate = () => {
    // Fecha con formato: 15/04/2021 - 10:05
    const date = new Date();
    const day = getTwoDigits(date.getDate());
    const month = getTwoDigits(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = date.getHours()
    const minutes = getTwoDigits(date.getMinutes());
    // let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    // if (month < 10){
    //     month = `0${month}`;
    // }

    const stringDate = `${day}/${month}/${year} ${hour}:${minutes}`;
    
    return stringDate;
}

// const createListElement = (actualDate, price) => `<li>${actualDate} - ${price}</li>`;


window.onload = init;
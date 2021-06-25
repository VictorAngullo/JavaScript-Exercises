const aliens = [
    { name: "Zalamero", planet: "Eden", age: 4029 },
    { name: "Paktu", planet: "Andromeda", age: 32 },
    { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
    {
        name: "Porompompero",
        description:
            "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
    },
    {
        name: "Fly me to the moon",
        description: "Permite volar, solo y exclusivamente a la luna",
    },
    {
        name: "Andando que es gerundio",
        description: "Invoca a un señor mayor como Personal Trainer",
    },
];

const aliensitos = aliens.find((element) => {
    return element.name === "Cucushumushu";
})

console.log(aliensitos);

const habilidades = mutations.find((element) => {
    return element.name === "Porompompero";
})

console.log(habilidades);

const newAlien = { ...aliensitos[0], mutation: habilidades[0] }
console.log(newAlien);
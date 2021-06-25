const users = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
];
const nombrecito = users.map((elem) => {
    if (elem.name.includes('A')) {
        return elem.name = "Anacleto"
    }
    return elem.name
})
console.log(nombrecito);
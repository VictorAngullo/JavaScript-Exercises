const cities = [
    { isVisited: true, name: "Tokyo" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" },
];

const viajecito = cities.map((elem) => {
    if (elem.isVisited) {
        return elem.name = elem.name += "visited"
    }
    return elem.name
})
console.log(viajecito);

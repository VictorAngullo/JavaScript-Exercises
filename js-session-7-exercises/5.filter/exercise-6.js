const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nombrecito = streamers.filter((elem) => {
    if (elem.gameMorePlayed.includes('Legends') && elem.age > 35) {
        return elem.gameMorePlayed = elem.gameMorePlayed.toLocaleUpperCase()
    }
})
console.log(nombrecito);
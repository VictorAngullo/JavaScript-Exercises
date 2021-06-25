const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Amopng Us" },
];

const misPanas = streamers.filter((elem) => {
    if (elem.gameMorePlayed === "League of Legends" && elem.age < 30 ) {
        return true;
    }
})
console.log(misPanas);
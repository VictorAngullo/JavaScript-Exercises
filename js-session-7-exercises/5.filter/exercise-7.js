const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const searchInput = document.querySelector('[data-function="toFilterStreamers"]')

const doSearch = (query) => {
    console.log(
        streamers.filter(str => str.name.toLocaleLowerCase().includes(query))
    )
}

searchInput.addEventListener('input', (e) => {
    doSearch(e.target.value.toLocaleLowerCase())
})
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const searchInput = document.querySelector('[data-function="toFilterStreamers"]')
const searchBtn = document.querySelector('button')

const doSearch = (query) => {
    console.log(
        streamers
        .filter(str => str.name.toLocaleLowerCase().includes(query))
        .map(str => str.name)
    )
}

searchInput.addEventListener('click', () => {
    doSearch(e.target.value.toLocaleLowerCase())
})
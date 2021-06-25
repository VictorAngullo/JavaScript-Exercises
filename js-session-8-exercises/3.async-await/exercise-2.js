
const getCharacters = async () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .await(characters => console.log(characters));
}

getCharacters();





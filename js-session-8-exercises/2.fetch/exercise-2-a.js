const baseUrl = 'https://api.nationalize.io';
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('click', () => {
    const searchInput = document.querySelector('#search').value
    console.log(searchInput)
})

.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
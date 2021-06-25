fetch('https://api.nationalize.io')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
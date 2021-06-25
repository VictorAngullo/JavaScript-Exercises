var alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var alienData in alien) {
    console.log("La propiedad" + alienData + "es" + alien[alienData])
}
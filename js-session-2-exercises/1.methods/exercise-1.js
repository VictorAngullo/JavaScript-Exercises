var products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
var word = "Camiseta"
for (let i = 0; i < products.length; i++) {
    if (products.includes(word)) { 
        console.log(products[i])
    }
}

products.forEach(element => {
    if (element.toLowerCase.includes(word.toLowerCase)) {
        console.log(element)
    }
})
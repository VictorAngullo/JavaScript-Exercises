const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const edad = ages.filter((edad) => {
    if (edad >= 18) {
        return edad;
    }
})
console.log(edad);
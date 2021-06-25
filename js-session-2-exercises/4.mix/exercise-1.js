var movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

var categoryList =[]

for (var movie of movies) {
    for (let i = 0; i < movie.categories.length; i++) {
        if (!categoryList.includes(movie.categories[i])) {
            categoryList.push(movie.categories[i]);
        }
        
    }
}
console.log(categoryList);
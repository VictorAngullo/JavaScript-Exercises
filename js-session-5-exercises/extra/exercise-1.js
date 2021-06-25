const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

var myList = document.createElement("ul");
document.body.appendChild(myList);

for (const country of countries) {
    myList.innerHTML += "<li>" + country + "</li>";
}

function myButton() {
    var Botn = document.createElement("button");
    Botn.id = btnToClick;
    Botn.onclick = papulia
    document.body.appendChild(myButton);
    Botn.innerText = "Púlsame"
}
function papulia(event) {
    console.log(event)
}
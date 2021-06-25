var myInput = document.querySelector("[type=text]")

myInput.addEventListener('input',
function (event) {
    console.log(event.target.value)
})
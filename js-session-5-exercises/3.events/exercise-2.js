var myInput = document.querySelector("[type=text]")

myInput.addEventListener('focus',
function (event) {
    console.log(event.target.value)
})
const nameInput = document.getElementById("cardholder-")
const nameVal = document.querySelector("input")

nameInput.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
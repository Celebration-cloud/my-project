const nameInput = document.getElementById("ca")
const nameVal = document.querySelector("#cardholder-name-input")

nameInput.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
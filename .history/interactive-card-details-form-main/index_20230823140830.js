const nameInput = document.getElementById("card-name")
const nameVal = document.querySelector("#cardholder-name-input")

name.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
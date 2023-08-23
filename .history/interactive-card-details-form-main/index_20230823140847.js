const nameInput = document.getElementById("card-name")
const nameVal = document.querySelector("#cardholder-name-input")

nameVal.addEventListener('input', function(e){
    nameInput.textContent = name.value
})
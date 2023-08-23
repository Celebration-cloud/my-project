const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = document.getElementById("cardholder-name-input")

nameVal.addEventListener('submit', function(e){
    nameInput.textContent = nameVal.value
})
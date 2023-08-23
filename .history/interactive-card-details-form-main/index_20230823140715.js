const nameInput = document.getElementById("cardholder-n")
const nameVal = document.querySelector("input")

nameInput.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
const nameInput = document.getElementById("")
const nameVal = document.querySelector("input")

nameInput.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
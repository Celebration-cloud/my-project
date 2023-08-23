const nameInput = document.getElementById("")
const nameVal = document.querySelector("")

nameInput.addEventListener('input', function(e){
    nameVal.textContent = nameInput.value
})
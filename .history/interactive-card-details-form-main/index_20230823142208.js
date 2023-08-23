const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = form.elements.nameEl.v

nameVal.addEventListener('input', function(e){
    console.log(nameVal.value)
})
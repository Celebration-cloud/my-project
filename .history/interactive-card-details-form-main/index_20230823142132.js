const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = form.elements.na

nameVal.addEventListener('input', function(e){
    console.log(nameVal.value)
})
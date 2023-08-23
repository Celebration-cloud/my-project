const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = form.elements.namedIt

nameVal.addEventListener('input', function(e){
    console.log(nameVal.value)
})
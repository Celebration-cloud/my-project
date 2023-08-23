const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = document.getElementById("card")

nameVal.addEventListener('input', function(e){
    console.log(nameVal.value)
})
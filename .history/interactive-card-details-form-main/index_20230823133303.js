const nameInputEl = document.querySelectorAll("#")
const numberInputEl = document.getElementById("card-number-input")
const monthInputEl = document.getElementById("expire-date")
const yearInputEl = document.getElementById("expire-date2")
const cvcInputEl = document.getElementById("cvc")
const nameEl = document.getElementById("card-name")
const number = document.getElementById("card-number")
const expDate = document.getElementById("exp-date")
const cvc = document.getElementById("cvc-digit")


nameInputEl.addEventListener('input', (e) =>{
    nameEl.innerText = nameInputEl.value
})

const form = document.querySelector("f")
const nameInputEl = document.getElementById("cardholder-name-input")
const numberInputEl = document.getElementById("card-number-input")
const monthInputEl = document.getElementById("expire-date")
const yearInputEl = document.getElementById("expire-date2")
const cvcInputEl = document.getElementById("cvc")
const nameEl = document.getElementById("card-name")
const number = document.getElementById("card-number")
const expDate = document.getElementById("exp-date")
const cvc = document.getElementById("cvc-digit")

form.
nameInputEl.addEventListener('input', (e) => {
    nameEl.textContent = nameInputEl.value
    
})

const form = document.getElementById("form")
const nameInputEl = document.("#cardholder-name-input")
const numberInputEl = document.("#card-number-input")
const monthInputEl = document.("#expire-date")
const yearInputEl = document.("#expire-date2")
const cvcInputEl = document.("#cvc")
const nameEl = document.("#card-name")
const number = document.("#card-number")
const expDate = document.("#exp-date")
const cvc = document.("#cvc-digit")

form.
nameInputEl.addEventListener('input', (e) => {
    nameEl.textContent = nameInputEl.value
    
})

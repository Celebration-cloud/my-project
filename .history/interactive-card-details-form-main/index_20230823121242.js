const form = document.getElementById("form")
const nameInputEl = document.ge("#cardholder-name-input")
const numberInputEl = document.ge("#card-number-input")
const monthInputEl = document.ge("#expire-date")
const yearInputEl = document.ge("#expire-date2")
const cvcInputEl = document.ge("#cvc")
const nameEl = document.ge("#card-name")
const number = document.ge("#card-number")
const expDate = document.ge("#exp-date")
const cvc = document.ge("#cvc-digit")

form.
nameInputEl.addEventListener('input', (e) => {
    nameEl.textContent = nameInputEl.value
    
})

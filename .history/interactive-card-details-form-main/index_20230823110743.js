const form = document.getElementById("form")
const nameInputEl = document.querySelector("#cardholder-number-input")
const numberInputEl = document.querySelector("#card-number-input")
const monthInputEl = document.querySelector("#expire-date")
const yearInputEl = document.querySelector("#expire-date2")
const cvcInputEl = document.querySelector("#cvc")
const nameEl = document.querySelector("#card-name")
const number = document.querySelector("#card-number")
const expDate = document.querySelector("#exp-date")
const cvc = document.querySelector("#cvc-digit")

form.addEventListener("click", function(e) {
    e.preventDefault()
})

form.addEventListener("input", function(e) {
    nameE.textContent = nameInputEl.value
    number.textContent = parseInt(numberInputEl.value)
    expDate.textContent = `${parseInt(monthInputEl.value)}/${parseInt(yearInputEl.value)}`
    cvc.textContent = parseInt(cvcInputEl.value)
})
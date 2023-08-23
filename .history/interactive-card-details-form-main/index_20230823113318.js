const form = document.getElementById("form")
const nameInputEl = document.querySelector("#cardholder-name-input")
const numberInputEl = document.querySelector("#card-number-input")
const monthInputEl = document.querySelector("#expire-date")
const yearInputEl = document.querySelector("#expire-date2")
const cvcInputEl = document.querySelector("#cvc")
const nameEl = document.querySelector("#card-name")
const number = document.querySelector("#card-number")
const expDate = document.querySelector("#exp-date")
const cvc = document.querySelector("#cvc-digit")

nameInputEl.addEventListener('input', (e) => {
    nameEl.innerText = nameInputEl.value
})
numberInputEl.addEventListener('input', (_e) => {
    number.textContent = numberInputEl.value
})
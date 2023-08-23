const form = document.getElementById("form")

form.addEventListener("click", function(e) {
    e.preventDefault()
})

form.addEventListener("input", function(e) {
    name.textContent = nameInputEl.value
    number.textContent = parseInt(numberInputEl.value)
    expDate.textContent = `${parseInt(monthInputEl.value)}/${parseInt(yearInputEl.value)}`
    cvc.textContent = parseInt(cvcInputEl.value)
})
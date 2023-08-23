const form = document.getElementById("form")

form.addEventListener("click", function(e) {
    e.preventDefault()
    const nameInputEl = document.querySelector("#cardholder-number-input")
    const numberInputEl = document.querySelector("#card-number-input")
    const monthInputEl = document.querySelector("#expire-date")
    const yearInputEl = document.querySelector("#expire-date2")
    const cvcInputEl = document.querySelector("#cvc")
    if (nameInputEl && !nameInputEl.value){
        
        nameInputEl.append("input ")
    }

})
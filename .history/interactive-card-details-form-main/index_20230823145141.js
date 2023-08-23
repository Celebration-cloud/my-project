const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = document.getElementById("cardholder-name-input")

form.addEventListener('submit', function(e){
    e.preventDefault()
    nameInput.textContent = nameVal.value
})

const successful = async () =>{
    const response = await fetch('/api/payment')
    const success = 
    if (response.ok) {
        window.location='/success'
    }
    else{
        alert(`An error occured: ${response}`)
    }
}
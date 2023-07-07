/*console.log('hello world')
let celeName = ('whats up')

console.log(celeName)

let myAge = 18
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge)

let bonusPoints = 50

bonusPoints = bonusPoints * 50
bonusPoints = bonusPoints - 2475
bonusPoints = bonusPoints + 45

console.log(bonusPoints)*/

/*function increment() {
    console.log('the increment is clicked')
    console.log(0)
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}

increment()*/
      /*  let lapsCompleted = 0
        function increment() {
            lapsCompleted = lapsCompleted + 1
            console.log(lapsCompleted)
        }*/

let welcomeEl = document.getElementById('welcome-el')

let name = 'Celebration'
let greeting = 'hi, my name is '
let myGreeting = greeting + name
        
welcomeEl.innerText = myGreeting 
console.log(myGreeting)

let saveBtn = document.getElementById('save-tel')
let CountTell = document.getElementById("count-tel")
let count = 0
function increment() {
    count += 1
    CountTell.textContent = count
}
function reset() {
    count = 0
    CountTell.textContent = count
}
function save(){
    saveBtn.textContent += CountTell.textContent + ' - ' 
    count = 0
    CountTell.textContent = count
}

/*let name = 'Celebration'
let greeting = 'Hi, my name is '
let myGreeting = greeting + name

console.log(myGreeting)*/
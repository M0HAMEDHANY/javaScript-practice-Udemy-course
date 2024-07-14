let counter = 0
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const number = document.getElementById("number")

increase.addEventListener('click' , ()=> {
    counter++
    number.textContent =counter
})
decrease.addEventListener('click' , ()=> {
    counter--
    number.textContent =counter
})
reset.addEventListener('click' , ()=> {
    counter = 0
    number.textContent =counter
})

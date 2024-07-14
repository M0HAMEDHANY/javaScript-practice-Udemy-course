const button = document.getElementById("check")
const result = document.getElementById("result")
const ASCII = document.getElementById("ASCII")

button.addEventListener('click', () => {
    const input = ASCII.value
    if (input.length > 0) {
        const codes = Array.from(input).map(char => char.charCodeAt(0)).join(' ')
        result.innerText = `ASCII/Unicode: ${codes}`
    } else {
        result.innerText = "Please enter a character."
    }
})
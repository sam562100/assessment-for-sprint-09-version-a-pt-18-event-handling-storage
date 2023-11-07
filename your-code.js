// Put your code in here to make each of the tests described in the HTML file
// pass.
window.addEventListener("DOMContentLoaded", () => {
    let p1 = document.getElementById('bubble-trouble')
    p1.addEventListener('click', e => {
        e.stopPropagation()
    })

    let incrementButton = document.getElementById('increment')
    let decrementButton = document.getElementById('decrement')
    let zero = document.getElementById('zero-out')
    let counterValueSpan = document.getElementById('counter-value')
    incrementButton.addEventListener('click', () => {
        counterValue++;
        counterValueSpan.innerHTML = counterValue
    })
    decrementButton.addEventListener('click', () => {
        counterValue--;
        counterValueSpan.innerHTML = counterValue
    })
    zero.addEventListener('click', () => {
        counterValue = 0;
        counterValueSpan.innerHTML = counterValue
    })

    let inputBox = document.getElementById('my-name-is')
    inputBox.addEventListener('keyup', () => {
        localStorage.setItem('nickname',  inputBox.value)
    })
    let storeValue = localStorage.getItem('nickname')
    if(storeValue !== null) {
        inputBox.value = storeValue
    }

    let p4 = document.getElementById('navigates-elsewhere')
    p4.addEventListener('click', e => {
        e.preventDefault()
    })

    
})

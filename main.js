const button = document.querySelector('#calculate')
const amount = document.querySelector('#amount')
const number = document.querySelector('#number')
const quality = document.querySelector('#quality')
const answer = document.querySelector('.answer')

button.addEventListener('click', calculate)
let result = ''

function calculate(){
    console.log('Boss')
    result = ((amount.value * quality.value)/number.value).toFixed(2)
    amount.value = ''
    quality.value = ''
    number.value=''
    if(result === 'NaN'){
        answer.textContent= 'Tip $0 each'
    }else {
        answer.textContent = `Tip ${result} each` 
    }
    
    console.log('Moss')


}
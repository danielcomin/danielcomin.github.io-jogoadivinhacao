// Variaveis
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 9)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', handleAgainEnter)
console.log(randomNumber)

// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas!`
  }
  inputNumber.value = ''
  xAttempts++
}

function handleAgainClick() {
  toggleScreen()
  window.location.reload();
  xAttempts = 1
}

function handleAgainEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

function validateNumber(event) {
  const input = event.target;
  const valueInput = input.value;

  // Remove todos os caracteres que não são números
  const onlyNumbers = valueInput.replace(/\D/g, '');

  // Se o valor do input for diferente dos números apenas, atualize o valor
  if (valueInput !== onlyNumbers) {
      input.value = onlyNumbers;
      alert(`APENAS NÚMEROS PERMITIDOS!`)
  }
}
 
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
// Eventos
const input = document.querySelector('input')

// Eventos de teclado
input.onkeydown = function () {
  console.log('teclou para baixo')
}
input.onkeyup = function () {
  console.log('tecla voltou para cima')
}
input.onkeypress = function () {
  console.log('tecla foi pressionada')
}

// Adicionando eventos via JS
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)
function print() {
  console.log('print')
}

// Argumento event
input.onkeyup = function (event) {
  console.log(event.currentTarget.value)
}
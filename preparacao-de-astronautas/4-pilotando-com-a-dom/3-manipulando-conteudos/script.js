const element = document.querySelector('h1')

// textContent
element.textContent += ", olá devs!"

// innerText
element.innerText += " Olá de novo!"

// innerHTML
element.innerHTML += " Continuando devs! <small>Pequeno devs!</small>"

// value
const element2 = document.querySelector('input')
element2.value = "Valor que eu quiser!"

// Manipulando atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))
header.removeAttribute('id')
console.log(headerID)
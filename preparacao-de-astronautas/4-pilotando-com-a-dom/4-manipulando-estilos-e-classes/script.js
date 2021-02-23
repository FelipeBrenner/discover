// Navegando pelos elementos
const el = document.querySelector('body')
const el2 = document.querySelector('h1')

// Buscando elementos pais
console.log(el.parentElement)
console.log(el2.parentNode)

// Pegando elementos filhos
console.log(el.childNodes)
console.log(el.children)
console.log(el.firstChild) // Leva em conta o espaço vazio
console.log(el.firstElementChild) // Não leva em contao o espaço vazio
console.log(el.lastChild)
console.log(el.lastElementChild)

// Buscando irmãos
console.log(el2.nextSibling)
console.log(el2.nextElementSibling)
console.log(el2.previousSibling)
console.log(el2.previousElementsSibling)
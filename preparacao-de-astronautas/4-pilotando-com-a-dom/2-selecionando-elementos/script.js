// getElementById - retorna um elemento
const element = document.getElementById('blog-title')
console.log(element)

// getElementByClassName - retorna um HTMLCollection
const element2 = document.getElementsByClassName('titles')
console.log(element2)

// getElementsByTagName = retorna um HTMLCollection
const element3 = document.getElementsByTagName('h1')
console.log(element3)

// querySelector - retorna um elemento e pega qualquer tipo, muito versátil
const element4 = document.querySelector('.titles')
console.log(element4)

// querySelectorAll - retorna um NodeList, permitindo fazer um for each
const elements = document.querySelectorAll('meta')
console.log(elements)

// Estudiosos dizem que o querySelector é um pouquinho mais lento que os outros
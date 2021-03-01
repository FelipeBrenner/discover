// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

const body = document.querySelector('body')

// append prepend
body.prepend(div)

// insertBefore
const script = body.querySelector('script')
body.insertBefore(div, script)
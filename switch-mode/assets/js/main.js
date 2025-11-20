const h1 = document.getElementById('page-title')
const botao = document.getElementById('mode-selector')
const body = document.getElementsByTagName('body')[0]
const foote = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'

function dark() {
  h1.classList.toggle(darkModeClass)
  botao.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  foote.classList.add(darkModeClass)
  mudarTexto()
}

function mudarTexto() {
  if (botao.classList.contains(darkModeClass)) {
    botao.innerHTML = 'Light Mode'
    h1.innerHTML = 'Dark Mode ON'
  } else {
    botao.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
  }
}

botao.addEventListener('click', dark)

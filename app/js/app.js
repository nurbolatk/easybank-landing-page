let isMobileNavShown = false
const btnHamburger = document.getElementById('btn-hamburger')

btnHamburger.addEventListener('click', function () {
  btnHamburger.classList.toggle('open')
  isMobileNavShown = !isMobileNavShown
})

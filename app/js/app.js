let isMobileNavShown = false
const header = document.querySelector('.header')
const btnHamburger = document.getElementById('btn-hamburger')
const navHeader = document.querySelector('.header__links')
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', toggleMobileNav)

function toggleMobileNav() {
  isMobileNavShown = !isMobileNavShown

  overlay.classList.toggle('hide')
  header.classList.toggle('open')
}

overlay.addEventListener('click', function (e) {
  toggleMobileNav()
})

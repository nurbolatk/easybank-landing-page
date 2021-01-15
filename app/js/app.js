let isMobileNavShown = false
const btnHamburger = document.getElementById('btn-hamburger')
const navHeader = document.querySelector('.header__links')
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', toggleMobileNav)

function toggleMobileNav() {
  btnHamburger.classList.toggle('open')
  isMobileNavShown = !isMobileNavShown

  overlay.classList.toggle('hide')
  navHeader.classList.toggle('show')
}

overlay.addEventListener('click', function (e) {
  toggleMobileNav()
})

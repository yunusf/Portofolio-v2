// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header') // mengambil elemen header
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger') // mengambil id hamburger
const navMenu = document.querySelector('#nav-menu') // mengambil id

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})
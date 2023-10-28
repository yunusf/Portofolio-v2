// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header') // mengambil elemen header
    const fixedNav = header.offsetTop
    const top = document.querySelector('#top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        top.classList.remove('hidden')
        top.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        top.classList.add('hidden')
        top.classList.remove('flex')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger') // mengambil id hamburger
const navMenu = document.querySelector('#nav-menu') // mengambil id


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik di luar Humberger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle') // checkbox
const html = document.querySelector('html')

const lRounded = document.querySelector('#long-rounded')
const rounded = document.querySelector('#rounded')

darkToggle.addEventListener('click', function () {
    lRounded.classList.toggle('bg-slate-700')
    lRounded.classList.toggle('bg-white')

    rounded.classList.toggle('bg-white')
    rounded.classList.toggle('bg-slate-700')

    // darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark' // menambahkan tema dark di local storage
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light' // menambahkan tema light di local storage
    }
})

// memindahkan posisi toggle sesuai momde
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false

}
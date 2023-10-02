let menu = document.getElementsByClassName('menu')[0]
let contentMenu = document.querySelector('.navegation')
let logo = document.getElementById('logo')

menu.addEventListener('click', function() {
    if (contentMenu.style.display == 'none') {
        contentMenu.style.display = 'block'
        logo.style.display = 'none'
    } else {
        contentMenu.style.display = 'none'
        logo.style.display = 'block'
    }
})
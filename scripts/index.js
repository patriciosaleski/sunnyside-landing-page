const hamburgerToggle = document.getElementById('hamburger-toggle')
const hamburgerMenu = document.getElementById('hamburger-menu')

hamburgerToggle.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('hidden')
})
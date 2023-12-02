// ======================== SHOW MENU =====================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',() =>{
        console.log('a');
        navMenu.classList.add('show-menu');
    })
}

// ======================== CLOSE MENU =====================
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

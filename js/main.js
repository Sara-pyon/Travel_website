import ScrollReveal from "./scroll.reveral.min.js";

// ======================== SHOW MENU =====================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    })
}

// ======================== CLOSE MENU =====================
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// ======================== SHOW SCROLLUP =====================
const scrollUp = () =>{
    const scrollUp = document.getElementById('scrollUp');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scrollUp'):
                            scrollUp.classList.remove('show-scrollUp');
}

window.addEventListener('scroll', scrollUp);

// ======================== CHANGE MENU BACKGROUND =====================
const scrollMenu = () =>{
    const scrollMenu = document.getElementById('header');
    window.scrollY >= 50 ? scrollMenu.classList.add('scroll-menu'):
                            scrollMenu.classList.remove('scroll-menu');
}

window.addEventListener('scroll',scrollMenu);

// ======================== ACTIVE LINK =====================
const sections = document.querySelectorAll('.section')

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop-200,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link');
    }else{
        sectionClass.classList.remove('active-link');
    }
    })
}

window.addEventListener('scroll',scrollActive);

// ====================== SCROLL REVERAL ANIMATION ============================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true Animation repeat
})

sr.reveal(`.home__header`);
sr.reveal(`.home__card`,{delay: 600, distance: '100px', interval: 100});
sr.reveal(`.about__header`,{origin: "right"});
sr.reveal(`.about__card`,{origin: "left"});
sr.reveal(`.popular__card`,{delay: 600, distance: '100px', interval: 100});
sr.reveal(`.explore__discription`);
sr.reveal(`.explore__profil`,{delay: 500});
sr.reveal(`.footer`);
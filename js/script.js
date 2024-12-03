// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// MENU MOBILE
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// SCROLL SUAVE 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





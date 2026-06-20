// Animación para cargar

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


// Efecto navbar al hacer scroll

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.4)';
    }
    else {
        header.style.boxShadow = 'none';
    }
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let nombre = prompt("¿Cómo te llamas?");

const h5 = document.querySelector('h5');
 h5.innerHTML = "¡Hola"+" "+ nombre + "!";



const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 300,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin: 'top'});
sr.reveal('.hero-img', {delay:450, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});
sr.reveal('.scroll-down', {delay:500, origin: 'right'});



sr.reveal('.tecnos', {delay:50, origin: 'top'});
sr.reveal('.img-tecnos', {delay:300, origin: 'top'});
sr.reveal('.img-container', {delay:350, origin: 'left'});
sr.reveal('.contenedor', {delay:350, origin: 'buttom'});

sr.reveal('.proyectos', {delay:50, origin: 'top'});
sr.reveal('.card', {delay:300, origin: 'top'});



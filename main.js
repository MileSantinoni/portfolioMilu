let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let nombre = prompt("¿Cómo te llamas?");

const h5 = document.querySelector('h5');
h5.innerHTML = "¡Hola"+" "+ nombre + "!";



const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin: 'top'});
sr.reveal('.hero-img', {delay:450, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});
sr.reveal('.scroll-down', {delay:500, origin: 'right'});



sr.reveal('.tecnos', {delay:200, origin: 'top'});
sr.reveal('.img-tecnos', {delay:450, origin: 'top'});
sr.reveal('.img-tecnos-text', {delay:500, origin: 'left'});
sr.reveal('.contenedor', {delay:500, origin: 'buttom'});
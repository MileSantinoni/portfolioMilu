let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let nombre = prompt("¿Cómo te llamas?");

//para el header
 let ubicacionPrincipal = window.pageYOffset;
 window.onscroll = function(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.querySelector('header').style.top = '0';
    } else {
        document.querySelector('header').style.top ='-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
 }

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

sr.reveal('.card', {delay:300, origin: 'top'});

//para el formulario 
var email = document.getElementById("email");
var asunto = document.getElementById("asunto");
var error = document.getElementById("error");


//para el formulario

function validarFormulario() {
    console.log('Validando formulario...');
    var mensajesError = [];
    var email = document.getElementById('email');

    
    var regexCorreo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.length > 0 ||  !regexCorreo.test(email.value)) {
        mensajesError.push("Correo electrónico inválido");
    }

    // if (email.value === null || email.value === "") {
    //     mensajesError.push("Ingresar email");
    // }

    if (asunto.value === null || asunto.value === "") {
        mensajesError.push("Ingresar asunto");
    }

    error.innerHTML = mensajesError.join("<br>");

    if (mensajesError.length > 0) {
        
        return false;
    }
    return true; 
}















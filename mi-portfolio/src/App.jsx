import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './index.css'; // (o './style.css', el que te haya funcionado)
import Hero from './Hero';
import Tecnologias from './Tecnologias';
import Proyectos from './Proyectos';
import Contacto from './Contacto';

export default function App() {
  
  const [showHeader, setShowHeader] = useState(true);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // 1. Lógica para ocultar/mostrar el header con el scroll
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(prevScrollPos >= currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    // 2. LÓGICA DE ANIMACIONES (ScrollReveal)
    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 300,
      reset: true
    });

    // Animaciones del inicio (Hero)
    sr.reveal('.hero-text', { delay: 200, origin: 'top' });
    sr.reveal('.hero-img', { delay: 450, origin: 'top' });
    sr.reveal('.icons', { delay: 500, origin: 'left' });
    sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

    // Animaciones de las Tecnologías
    sr.reveal('#tecnos', { delay: 50, origin: 'top' });
    sr.reveal('.img-tecnos', { delay: 300, origin: 'top' });
    sr.reveal('.img-container', { delay: 350, origin: 'left' });

    // Animaciones de los Proyectos
    sr.reveal('.card', { delay: 300, origin: 'top' });
    
    // Animación extra para que el formulario también aparezca suavemente
    sr.reveal('.contacto', { delay: 300, origin: 'top' });

    // Limpieza al desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <header style={{ top: showHeader ? '0' : '-100px', transition: 'top 1.5s' }}>
        <a href="#hero" className="logo">
            <img src="./img/Yuumi.icono.png" alt="Logo" /> 
        </a>

        <div className="nav">
            <ul className={menuActive ? 'active' : ''}>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#tecnos">Tecnologías</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
            </ul>
        </div>
        <div id="menu-icon" onClick={() => setMenuActive(!menuActive)}>☰</div>
      </header>

      <Hero />
      <Tecnologias />
      <Proyectos />
      <Contacto />
      
    </div>
  );
}
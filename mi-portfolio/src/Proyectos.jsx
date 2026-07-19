import React from 'react';

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
         {/* Tarjeta Part of the Universe */}
        <div className="card">
        <div className="face front">
          {/* Reemplaza el nombre de la imagen por el que tenías en tu carpeta img */}
          <img src="./img/proteger.png" alt="Part of the Universe" />
          <h3>Part of the Universe</h3>
        </div>
        <div className="face back">
          <h2>Part of the Universe</h2>
          <p>Vení a descubrir un poco más sobre algunos personajes del universo Marvel</p><br/><br/>
          <a href="https://part-of-the-universe23022.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
      </div>
      
      {/* Tarjeta TecnoCrud */}
      <div className="card">
        <div className="face front">
          <img src="./img/pngwing.com (1).png" alt="TecnoCrud" />
          <h3>TecnoCrud</h3>
        </div>
        <div className="face back">
          <h2>TecnoCrud</h2>
          <p>Practicando create, read, update, delete... Página con temática tecno</p><br/><br/>
          <a href="https://github.com/MileSantinoni/proyectocrud/tree/main" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
      </div>

      {/* Tarjeta Flappy Bird */}
      <div className="card">
        <div className="face front">
          <img src="./img/Bird.png" alt="Flappy Bird" />
          <h3>Flappy Bird</h3>
        </div>
        <div className="face back">
          <h2>Flappy Bird</h2>
          <p>¿Jugamos un ratito? el clásico juego del pajarito que se hizo viral en insta, con puro html, css y js </p><br/><br/>
          <a href="https://pajarito.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
      </div>

    </section>
  );
}
export default Proyectos;
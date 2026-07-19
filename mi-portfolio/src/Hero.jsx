function Hero() {
  return (
    <div style={{ position: 'relative' }}> {/* Usamos un contenedor para las posiciones absolutas */}
      
      {/* SECCIÓN DE REDES SOCIALES */}
      <div className="icons">
        <a href="https://www.instagram.com/mile.santinoni/" target="_blank">
            <i className="ri-instagram-line"></i>
        </a>
        <a href="https://github.com/MileSantinoni" target="_blank" >
            <i className="ri-github-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/milena-santinoni/" target="_blank">
            <i className="ri-linkedin-box-line"></i>
        </a>
         <a href="mailto:msantinoniblanco@frba.utn.edu.ar"><i class="ri-mail-line"></i></a>
      </div>

      <aside className="hero" id="hero">
        <div className="hero-text">
          <h5>¡Holaa!</h5>
          <h4>Soy Milena Santinoni<br/> ¡Te doy la bienvenida a mi portfolio!</h4><br/><br/>
          <h1>Un poco sobre mí</h1>
          <p>
            Me entusiasma aprender sobre tecnología, diseño y tendecias de desarrollo. <br/> 
            Actualmente estudio Ingeniería en Sistemas en la Universidad Tecnológica Nacional <br/> 
            y recientemente me he capacitado en desarrollo web full stack y diseño gráfico <br/> 
            (debo admitir que me encanta el desarrollo front-end) <br/>
          </p>
          <a href="#tecnos">Tecnos</a>
          <a href="#proyectos">Proyectos</a>
        </div>
        <div className="hero-img">
          <img src="./img/Yuumi Splash.png" alt="Yuumi" />
        </div>
      </aside>

      
      {/* <div className="scroll-down">
        <a href="#tecnos"><i className="tu-clase-flecha-abajo">Bajar</i></a>
      </div>  */}

    </div>
  );
}

export default Hero;
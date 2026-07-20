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
            Soy estudiante de Ingeniería en Sistemas de Información y me apasiona crear soluciones digitales que combinen tecnología, creatividad y funcionalidad. Me especializo en desarrollo web y disfruto aprender nuevas herramientas, automatizar procesos y transformar ideas en proyectos reales. Tengo experiencia en soporte técnico y una base sólida en HTML, CSS, JavaScript, Git y MySQL. Me considero una persona curiosa, autodidacta y siempre con ganas de seguir creciendo. <br/>
          </p>
          <a href="#tecnos">Tecnos</a>
          <a href="#proyectos">Proyectos</a>
        </div>
        <div className="hero-img">
          <img src="./img/Yuumi Splash.png" alt="Yuumi" />
        </div>
      </aside>


    </div>
  );
}

export default Hero;
import React, { useState } from 'react';

function Contacto() {
  // Aquí guardamos lo que el usuario escribe
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorMsj, setErrorMsj] = useState('');

  // Replicamos tu función validarFormulario() de main.js
  const validarFormulario = (e) => {
    e.preventDefault(); 
    
    let mensajesError = [];

    if (email.trim() === '') {
      mensajesError.push('El email es obligatorio');
    }
    if (asunto.trim() === '') {
      mensajesError.push('El asunto es obligatorio');
    }
    
    if (mensajesError.length > 0) {
      setErrorMsj(mensajesError.join(' - '));
    } else {
      setErrorMsj('');
      
      // --- NUEVA CONFIGURACIÓN PARA ENVIAR EL MAIL ---
      // Reemplaza TU_CORREO@GMAIL.COM por tu correo real
      fetch("https://formsubmit.co/ajax/msantinoniblanco@frba.utn.edu.ar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            Remitente: email,
            Asunto: asunto,
            Mensaje: mensaje
        })
      })
      .then(response => response.json())
      .then(data => {
        alert('¡Mensaje enviado correctamente a tu correo!');
        // Limpiamos el formulario
        setEmail('');
        setAsunto('');
        setMensaje('');
      })
      .catch(error => {
        setErrorMsj('Hubo un error al conectar con el servidor.');
        console.log(error);
      });
      // ------------------------------------------------
    }
  };

  return (
    <>
      <section className="contacto" id="contacto">
        <div className="flex-container">
          <form className="form" onSubmit={validarFormulario}>
            <h3>Contacto</h3>
            
            <input 
              type="email" 
              id="email" 
              className="form__input" 
              placeholder="Tu Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input 
              type="text" 
              id="asunto" 
              className="form__input" 
              placeholder="Asunto" 
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
            
            <textarea 
              className="form__input" 
              placeholder="Tu mensaje..." 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            
            {/* Aquí se mostrará el error en rojo si faltan datos */}
            <div id="error">{errorMsj}</div>
            
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        {/* Cambia esto por el texto que tenías originalmente en tu footer */}
        <p>Web hecha con 💖 por Milena Santinoni © 2026</p> 
      </footer>
    </>
  );
}

export default Contacto;
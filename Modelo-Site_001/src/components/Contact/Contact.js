import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="containercontact">
      <div> 
        <h1>Entre em Contato Conosco</h1>
        <p className='pcontact'>Estamos aqui para responder suas perguntas e fornecer mais informações sobre nossos serviços.</p>
          <div className="contact-info">
              <h2 className='h2contact'>Informações de Contato</h2>
              <p><strong>Email:</strong> contato@empresa.com</p>
              <p><strong>Telefone:</strong> (00) 0000-0000</p>
          </div>
      </div>

      <div className="contact-form">
          <h2 className='h2contact'>Formulário de Contato</h2>
      <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Enviar Mensagem</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import './style.css';

const Empresa: React.FC = () => {
  return (
    <div className="empresa-page">
      <div className="empresa-info">
        <h1>Bem-vindo à Empresa XYZ</h1>
        <p>Somos uma empresa inovadora que se destaca no mercado global. Nossa missão é oferecer soluções de ponta para nossos clientes e criar um impacto positivo na comunidade.</p>
        <p>Estamos comprometidos com a excelência, a integridade e a sustentabilidade em tudo o que fazemos.</p>
      </div>
      <div className="contact-form">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log('Formulário de contato enviado!');
};

export default Empresa;

import React from 'react';
import './style.css';

const Suporte: React.FC = () => {
  return (
    <div className="suporte-page">
      <header className="header">
        <h1 className="title">Suporte ao Usuário - Salesforce</h1>
      </header>
      <main className="main">
        <div className="info-section">
          <h2 className="section-title">Contate-nos</h2>
          <p className="section-content">Para obter suporte, entre em contato conosco pelo telefone: 1-800-NO-SOFTWARE ou envie um e-mail para support@salesforce.com.</p>
        </div>
        <div className="info-section">
          <h2 className="section-title">Perguntas frequentes (FAQ)</h2>
          <p className="section-content">Acesse nossa seção de perguntas frequentes para encontrar respostas para as dúvidas mais comuns sobre nossos produtos e serviços.</p>
        </div>
        <div className="info-section">
          <h2 className="section-title">Recursos de Ajuda</h2>
          <p className="section-content">Explore nossa documentação online, tutoriais em vídeo e fóruns de usuários para obter ajuda e suporte adicional.</p>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2024 Salesforce - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Suporte;

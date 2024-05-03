import React from 'react';
import './style.css';

const Empresa: React.FC = () => {
  return (
    <div className="empresa-info-page">
      <header>
        <h1 className="empresa-title">Informações da Empresa Salesforce</h1>
      </header>
      <main>
        <div className="info-section">
          <h2 className="section-title">Quem somos</h2>
          <p className="section-content">A Salesforce é uma empresa de tecnologia líder mundial, especializada em soluções de CRM (Customer Relationship Management).</p>
        </div>
        <div className="info-section">
          <h2 className="section-title">Missão</h2>
          <p className="section-content">Nossa missão é capacitar as empresas a crescer, conectando-se com seus clientes de maneira totalmente nova.</p>
        </div>
        <div className="info-section">
          <h2 className="section-title">Valores</h2>
          <ul className="value-list">
            <li>Inovação</li>
            <li>Integridade</li>
            <li>Igualdade</li>
            <li>Sustentabilidade</li>
          </ul>
        </div>
      </main>
      <footer>
        <p className="footer-text">&copy; 2024 Salesforce</p>
      </footer>
    </div>
  );
};

export default Empresa;

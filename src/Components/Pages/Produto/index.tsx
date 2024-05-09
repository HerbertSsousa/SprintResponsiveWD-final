import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Produto: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('URL_DAAPI_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, selectedProduct })
      });
      if (response.ok) {
        alert('Sua solicitação foi enviada com sucesso!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSelectedProduct('');
      } else {
        throw new Error('Erro ao enviar solicitação');
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className='titulop'>Produtos Salesforce</h1>
      </header>
      <main>
        <section className="product">
          <img src='./src/assets/1imgSalesforce.png' alt="Commerce Logo" />
          <h2>Salesforce Commerce</h2>
          <p>
            O Salesforce Commerce oferece uma plataforma completa para empresas que desejam
            criar experiências de compra excepcionais para seus clientes, permitindo a venda
            de produtos online de forma eficiente e personalizada.
          </p>
        </section>
        <section className="product">
          <img src='./src/assets/2imgSalesforce.png' alt="Atendimento ao Cliente Logo" />
          <h2>Salesforce Atendimento ao Cliente</h2>
          <p>
            O Salesforce Atendimento ao Cliente é uma solução abrangente para gerenciar
            interações com os clientes em vários canais, oferecendo suporte eficaz e
            personalizado para resolver problemas e fornecer assistência.
          </p>
        </section>
        <section className="product">
          <img src='./src/assets/3imgSalesforce.png' alt="Vendas Logo" />
          <h2>Salesforce Vendas</h2>
          <p>
            O Salesforce Vendas é uma plataforma que ajuda equipes de vendas a fechar
            negócios mais rapidamente, automatizando processos, fornecendo insights
            valiosos e facilitando a colaboração.
          </p>
        </section>
        <section className="product">
          <img src='./src/assets/4imgSalesforce.png' alt="Data Cloud Logo" />
          <h2>Salesforce Data Cloud</h2>
          <p>
            O Salesforce Data Cloud oferece acesso a dados de terceiros confiáveis e
            atualizados para enriquecer a inteligência do cliente, melhorar a segmentação
            e impulsionar o sucesso das iniciativas de marketing e vendas.
          </p>
        </section>
        <section className="product">
          <img src='./src/assets/5imgSalesforce.png' alt="Inteligência Artificial Logo" />
          <h2>Salesforce Inteligência Artificial</h2>
          <p>
            A inteligência artificial da Salesforce oferece recursos avançados de
            análise de dados e automação para ajudar as empresas a prever tendências,
            personalizar experiências e otimizar processos em toda a organização.
          </p>
        </section>
        <section className="product">
          <img src='./src/assets/2imgSalesforce.png' alt="Costumer 360 Logo" />
          <h2>Salesforce Costumer 360</h2>
          <p>
            O Salesforce Costumer 360 é uma plataforma integrada que unifica dados
            de clientes de todas as fontes, oferecendo uma visão completa e em tempo
            real para fornecer experiências personalizadas e consistentes.
          </p>
        </section>



      </main>
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="product-select">Escolha um produto:</label>
        <select id="product-select" value={selectedProduct} onChange={handleProductChange}>
          <option value="">Selecione um produto</option>
          <option value="Salesforce Commerce">Salesforce Commerce</option>
          <option value="Salesforce Atendimento ao Cliente">Salesforce Atendimento ao Cliente</option>
          <option value="Salesforce Vendas">Salesforce Vendas</option>
          <option value="Salesforce Data Cloud">Salesforce Data Cloud</option>
          <option value="Salesforce Inteligência Artificial">Salesforce Inteligência Artificial</option>
          <option value="Salesforce Costumer 360">Salesforce Costumer 360</option>

      
        </select>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Assunto:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={!selectedProduct}>Enviar</button>
      </form>
    </div>
  );
};

export default Produto;

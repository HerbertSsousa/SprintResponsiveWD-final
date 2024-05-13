import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

interface FormData {
  idProduto: string;
  nome: string;
  descricao: string;
  preco: string;
  categoriaProdutoID: string;
  quantidade: string;
  status: string;
}

interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  categoriaProdutoID: string;
  quantidade: string;
  status: string;
}

const Produto: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState<FormData>({
    idProduto: '',
    nome: '',
    descricao: '',
    preco: '',
    categoriaProdutoID: '',
    quantidade: '',
    status: ''
  });
  const [confirm, setConfirm] = useState(false);

  const products: Product[] = [
    { id: '1', nome: 'Salesforce Commerce', descricao: 'Descrição do Salesforce Commerce', preco: '100.00', categoriaProdutoID: '1', quantidade: '10', status: 'Disponível' },
    { id: '2', nome: 'Salesforce Atendimento ao Cliente', descricao: 'Descrição do Salesforce Atendimento ao Cliente', preco: '200.00', categoriaProdutoID: '2', quantidade: '20', status: 'Disponível' },
    { id: '3', nome: 'Salesforce Vendas', descricao: 'Descrição do Salesforce Vendas', preco: '300.00', categoriaProdutoID: '3', quantidade: '30', status: 'Disponível' },
    { id: '4', nome: 'Salesforce Data Cloud', descricao: 'Descrição do Salesforce Data Cloud', preco: '400.00', categoriaProdutoID: '4', quantidade: '40', status: 'Disponível' },
    { id: '5', nome: 'Salesforce Inteligência Artificial', descricao: 'Descrição do Salesforce Inteligência Artificial', preco: '500.00', categoriaProdutoID: '5', quantidade: '50', status: 'Disponível' },
    { id: '6', nome: 'Salesforce Costumer 360', descricao: 'Descrição do Salesforce Costumer 360', preco: '600.00', categoriaProdutoID: '6', quantidade: '60', status: 'Disponível' },
  ];

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = event.target.value;
    setSelectedProduct(productId);
    const selectedProductData = products.find(product => product.id === productId);
    if (selectedProductData) {
      setFormData({
        idProduto: selectedProductData.id,
        nome: selectedProductData.nome,
        descricao: selectedProductData.descricao,
        preco: selectedProductData.preco,
        categoriaProdutoID: selectedProductData.categoriaProdutoID,
        quantidade: selectedProductData.quantidade,
        status: selectedProductData.status
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const confirmarEnvio = () => {
    const confirmacao = window.confirm('Tem certeza que deseja enviar os dados?');
    if (confirmacao) {
      setConfirm(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirm) {
      confirmarEnvio();
    } else {
      try {
        const response = await fetch('http://localhost:8083/produto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...formData, selectedProduct })
        });
        if (response.ok) {
          alert('Sua solicitação foi enviada com sucesso!');
          setFormData({
            idProduto: '',
            nome: '',
            descricao: '',
            preco: '',
            categoriaProdutoID: '',
            quantidade: '',
            status: ''
          });
          setSelectedProduct('');
          setConfirm(false);
        } else {
          throw new Error('Erro ao enviar solicitação');
        }
      } catch (error) {
        console.error('Erro ao enviar solicitação:', error);
      }
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
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.nome}</option>
          ))}
        </select>
        <div className="form-group">
          <label htmlFor="idProduto">ID Produto:</label>
          <input type="text" id="idProduto" name="idProduto" value={formData.idProduto} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" name="preco" value={formData.preco} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="categoriaProdutoID">ID Categoria Produto:</label>
          <input type="text" id="categoriaProdutoID" name="categoriaProdutoID" value={formData.categoriaProdutoID} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input type="text" id="quantidade" name="quantidade" value={formData.quantidade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={!selectedProduct}>{confirm ? 'Confirmar Envio' : 'Enviar'}</button>
      </form>
    </div>
  );
};

export default Produto;

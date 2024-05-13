import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

interface FormData {
  IdSuporte: number;
  nome: string;
  email: string;
  horarioAtendimento: string;
  subject: string;
  message: string;
  resolvido: boolean;
}

const Suporte: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    IdSuporte: 0,
    nome: '',
    email: '',
    horarioAtendimento: '',
    subject: '',
    message: '',
    resolvido: false
  });

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
      const response = await fetch('http://localhost:8083/suportes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Sua solicitação foi enviada com sucesso!');
        setFormData({
          IdSuporte: 0,
          nome: '',
          email: '',
          horarioAtendimento: '',
          subject: '',
          message: '',
          resolvido: false
        });
      } else {
        throw new Error('Erro ao enviar solicitação');
      }
    } catch (error) {
      return error
    }
  };

  return (
    <div className="suporte-page">
      <header className="header">
        <h1 className="title">Suporte ao Usuário - Salesforce</h1>
      </header>
      <main className="main">
        <form className="support-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="IdSuporte">ID do Suporte:</label>
            <input type="number" id="IdSuporte" name="IdSuporte" value={formData.IdSuporte} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="horarioAtendimento">Horário de Atendimento:</label>
            <input type="text" id="horarioAtendimento" name="horarioAtendimento" value={formData.horarioAtendimento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="resolvido">Resolvido:</label>
            <input type="checkbox" id="resolvido" name="resolvido" checked={formData.resolvido} onChange={handleChange} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default Suporte;

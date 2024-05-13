import React, { useState } from 'react';
import './style.css';

interface FormData {
  nomeCompleto: string;
  email: string;
  senhaLogin: string;
  cpf: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    email: '',
    senhaLogin: '',
    cpf: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8083/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Login bem-sucedido!');
      } else {
        throw new Error('Erro ao fazer login');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <div className="form-group">
          <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="senhaLogin" className="form-label">Senha</label>
          <input type="password" id="senhaLogin" name="senhaLogin" value={formData.senhaLogin} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="cpf" className="form-label">CPF</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

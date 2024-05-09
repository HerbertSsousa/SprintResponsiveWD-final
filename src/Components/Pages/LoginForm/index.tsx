import React, { useState } from 'react';
import './style.css';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      const response = await fetch('URL_DAAPI_AQUI', {
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
          <label htmlFor="username" className="form-label">Usuário</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./Components/Pages/LoginForm/index.tsx";
import Integrantes from "./Components/Pages/Integrantes/index.tsx";
import Empresa from './Components/Pages/Empresa/index.tsx';
import Suporte from './Components/Pages/Suporte/index.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>


      <Routes>
        <Route path="/Empresa" element={<Empresa />} />
      </Routes>

      <Routes>
        <Route path="/Suporte" element={<Suporte />} />
      </Routes>
      
      
     
      <Routes>
       <Route path="/Integrantes" element={<Integrantes  
          Nome='Herbert Santos'
          Img='./src/assets/Herbert.png' 
          Email='RM553227@fiap.com.br'
          Rm={553227}
          funcao='Desenvolvedor Pleno'/>}/>
      </Routes>
        


      <Routes>
              <Route path="/Integrantes" element={<Integrantes
                Nome='Isabelle Queiroz'
                Img='./src/assets/Isabelle.png'
                Email='RM554073@fiap.com.br'
                Rm={554073}
                funcao='Desenvolvedor Pleno'
              />}/>
      </Routes>
        

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
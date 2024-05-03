
import React from "react";
import { Link } from "react-router-dom";
import login from "../Pages/LoginForm";
import Salesforce from "../../assets/Salesforce-Logo.png";
import boneco from "../../assets/boneco.png";
import search from "../../assets/search.png";
import "./Style.css";
import Empresa from "../Empresa";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              
              <button> <Link to={"/"} target="_blank">Produtos</Link> </button>
              
            </li>
            <li>Indústria</li>
            <li>Aprendizado</li>
            <li>
              <img width={130} src={Salesforce} alt="Salesforce Logo" />
            </li>
            <li>Suporte</li>
                <li>
              
                   <button> <Link to={"/"} target="_blank" >Empresa</Link> </button>
              
                </li>
          
              <li>
                
                  <button> <Link to={"/LoginForm"} target="_blank" >Login</Link> </button>
                  
              </li>

            <li>
              <img width={20} height={20} src={search} alt="Search Ícone" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
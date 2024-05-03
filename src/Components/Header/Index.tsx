import React, { useState } from "react";
import { Link } from "react-router-dom";
import Salesforce from "../../assets/Salesforce-Logo.png";
import "./Style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
         
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "menu open" : "menu"}>
            <li>
              <button>
                <Link to={"/"}>Produtos</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"https://www.salesforce.com/br/solutions/industries/"}>Indústria</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"https://www.salesforce.com/br/solutions/industries/"}>Aprendizado</Link>
              </button>
            </li>
            <div className="logo">
            <Link to={"/"}>
              <img className="img1" width={130} src={Salesforce} alt="Salesforce Logo" />
            </Link>
          </div>
            <li>
              <button>
                <Link to={"/Suporte"}>Suporte</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"/Empresa"}>Empresa</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to={"/LoginForm"}>Login</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

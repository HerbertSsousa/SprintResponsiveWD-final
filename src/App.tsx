import Principal from "./Components/Principal";
import Integrantes from "./Components/Integrantes";
import Footer  from "./Components/Footer";
import Contato from "./Components/contato";
import './App.css';
import Header from './Components/Header/Index.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>

    <Header/>

    <div className="editIntegrantes">
        <div className="principalSection">
          <Principal Img='./src/assets/1imgSalesforce.png'
          funcao="Commerce"
          url="https://makesensesoft.com/salesforce-integration-solutions/salesforce-commerce-cloud/" />
          <Principal Img='./src/assets/2imgSalesforce.png'
          funcao="Atendimento ao Cliente"
          url="https://www.salesforce.com/br/atendimento-ao-cliente/" />
          <Principal Img='./src/assets/3imgSalesforce.png'
          funcao="Vendas"
          url="https://www.salesforce.com/br/products/sales/"/>
 
         
         
        </div> 

        <div className="principalSection">
          <Principal Img='./src/assets/1imgSalesforce.png'
          funcao="Commerce" />
          <Principal Img='./src/assets/2imgSalesforce.png'
          funcao="Atendimento ao Cliente" />
          <Principal Img='./src/assets/3imgSalesforce.png'
          funcao="Vendas" />
          
        </div>

        

    <div className="redesSociail">
        <Footer 
        Img='./src/assets/logoFace.png'
        url="https://www.facebook.com/salesforce"
        />
         <Footer 
        Img='./src/assets/logoX.jpg'
        url="https://twitter.com/salesforce"
        />
        <Footer 
        Img='./src/assets/logoLin.png'
        url="https://www.linkedin.com/company/salesforce/"
        />
         <Footer 
        Img='./src/assets/logoInsta.png'
        url="https://www.instagram.com/salesforce/"
        />
      <Footer 
        Img='./src/assets/logoYou.png'
        url="https://www.youtube.com/user/Salesforce"
        />


      </div>

      <div className="textoContato">
      <Contato 
      Nome="Entre em contato | 800-664-9073"/>
      <div className="botaoIntegrantes">
      <Contato
      Nome="Integrantes"/>
      </div>
      
    </div>


   
      

        
    </div>
      

      

    </>

    
  );
}



export default App;

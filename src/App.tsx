import Principal from "./Components/Principal";
import Integrantes from "./Components/Pages/Integrantes/index.tsx";
import Footer  from "./Components/Footer";
import Contato from "./Components/Pages/contato/index.tsx";
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
          <Principal Img='./src/assets/4imgSalesforce.png'
          funcao="Data Cloud" 
          url="https://www.salesforce.com/br/data/"/>
          <Principal Img='./src/assets/5imgSalesforce.png'
          funcao="Inteligência artificial" 
          url="https://www.salesforce.com/br/products/einstein-ai-solutions/"/>
          <Principal Img='./src/assets/6imgSalesforce.png'
          funcao="Costumer 360" 
          url="https://salesforcecustomer360.herokuapp.com/quiz/1/?campaign=industry&_ga=2.134923700.478302711.1714661249-1937629688.1695163273"/>
          
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

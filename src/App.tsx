import Principal from "./Components/Principal";
import Integrantes from "./Components/Integrantes";
import Footer  from "./Components/Footer";
import Contato from "./Components/contato";
import './App.css';

function App() {
  return (
    <>
      <div className="editIntegrantes">
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
        />
         <Footer 
        Img='./src/assets/logoX.jpg'
        />
        <Footer 
        Img='./src/assets/logoLin.png'
        />
         <Footer 
        Img='./src/assets/logoInsta.png'
        />
      <Footer 
        Img='./src/assets/logoYou.png'
        />


    
        
    </div>

<div className="textoContato">
<Contato 
Nome="Entre em contato | 800-664-9073"/>


</div>

        <Integrantes
          Nome='Herbert Santos'
          Img='./src/assets/Herbert.png' 
          Email='RM553227@fiap.com.br'
          Rm={553227}
          funcao='Desenvolvedor Pleno'
        />
        <Integrantes
          Nome='João Pedro'
          Img='./src/assets/Joao.png'
          Email='RM553698@fiap.com.br'
          Rm={553698}
          funcao='Desenvolvedor Pleno'
        />
        <Integrantes
          Nome='Isabelle Queiroz'
          Img='./src/assets/Isabelle.png'
          Email='RM554073@fiap.com.br'
          Rm={554073}
          funcao='Desenvolvedor Pleno'
        />
      </div>
      
    </>
  );
}

export default App;

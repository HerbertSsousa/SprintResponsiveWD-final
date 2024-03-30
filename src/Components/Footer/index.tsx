import './style.css'

type FooterProps = {
   
    Img: string;
    
  }
  
  const Footer: React.FC<FooterProps> = ({Img}) => {

    

   
    return (
      <div className="footer">
        <div className="footer-content">
          <img src={Img} width= '2%' height= '2%' />
         
        </div>
        
      </div>
      
    );
  };
  
  export default Footer;
  
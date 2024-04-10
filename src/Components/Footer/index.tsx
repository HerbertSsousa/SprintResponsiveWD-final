import './style.css'

type FooterProps = {
   
    Img: string;
    url: string;
  }
  
  const Footer: React.FC<FooterProps> = ({Img, url}) => {

    

   
    return (
      <div className="footer">
        <div className="footer-content">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={Img} width= '2%' height= '2%' />
        </a>
        
        </div>
        
      </div>
      
    );
  };
  
  export default Footer;
  
import './style.css';
 
type Integrantes = {
    Img: string;
    funcao: string;
    url: string;
}
 
const vendas = ({ Img, funcao, url }: Integrantes) => {
    return (
        <div className="vendas">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={Img} width='100%' height='100%' />
            </a>
            <h2>{funcao}</h2>
        </div>
    );
}
 
export default vendas;
 
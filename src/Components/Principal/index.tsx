import './style.css'


type Integrantes = {

    Img: string;
    funcao: string;
}


const vendas = ({Img, funcao} : Integrantes) => {
    return(
        <div className="vendas">
            <img src={Img} width= '100%' height= '100%' />
            <h2>{funcao}</h2>
        </div>
        
    )
}

export default vendas;
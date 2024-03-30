import "./style.css";

type Integrantes = {
    Nome : string;
    Img: string;
    Email: string;
    Rm: number;
    funcao: string; 

}


const CardIntegrantes = ({Nome, Img, Email, Rm, funcao} : Integrantes) => {
    return(
        <div className="cardIntegrantes">
            <h1>{Nome}</h1>
            <img src={Img} width={130} height={130} />
            <h3>{Email}</h3>
            <h3>{Rm}</h3>
            <h5>{funcao}</h5>
        </div>
    )
}

export default CardIntegrantes;
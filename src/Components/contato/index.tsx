import "./style.css";

type contato = {
    Nome : string;
    

}


const contato = ({Nome} : contato) => {
    return(
        <div className="contato">
            <h3>{Nome}</h3>
         
        </div>
    )
}

export default contato;
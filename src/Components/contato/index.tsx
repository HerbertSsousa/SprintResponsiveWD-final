import "./style.css";
import { Link } from "react-router-dom";

type contato = {
    Nome : string;
    

}


const contato = ({Nome} : contato) => {
    return(
        <div className="contato">
            <Link to={"/Integrantes"}><h3>{Nome}</h3></Link>
         
        </div>
    )
}

export default contato;
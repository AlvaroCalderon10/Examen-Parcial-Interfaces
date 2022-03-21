import React, {FC,useState} from "react";
import ReactDOM from "react-dom";
import Info from "./Info";

type cocteles={
    idDrink:string;
    strDrink:string;
    strDrinkThumb:string;
    strTags:string;
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
}


const Coctail: FC <{char:cocteles}> = ({char}) => {
    const [nombre,setInfo] = useState<string>(char.strDrink);
    const url=char.strDrinkThumb+"/preview";
    

    return(
        <div onClick={()=>{
            ReactDOM.render(<Info key={char.idDrink+"ingr"} char = {char}/>,document.getElementById("caja"));

        }}>
            <div>
                <img src={url} />
            </div>
            <div>
            {nombre}
            </div>
            
        
            
        </div>



    )
}

export default Coctail;
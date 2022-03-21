import React, {FC,useState, useEffect} from "react";
//import Info from "./Info";
import ReactDOM from "react-dom";
import Coctail from "./Coctail";
import '../styles/Coctails.css';

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
const Coctails:FC = () => {

    const getChars = async (texto:string) => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${texto}&format=json`);
            const data = await response.json();
            console.log(data.drinks);
            setcoctel(data.drinks);
            return(data.drinks);
        }catch(e){
            console.error(e);
        }
    };

    const [coctel,setcoctel] = useState<cocteles[]>([]);
    const [valor, setValor] = useState<string>("");

    useEffect(() => {
        //getChars(valor).then(per => ReactDOM.render(<Info key={"1"} person = {per[0]}/>,document.getElementById("caja")));
        getChars(valor);

    }, []);
    

    return(
        <div id="global">
            <header id="head">
                <input type = "text" value= {valor} onChange = {
                    (e) => setValor(e.target.value)
                }></input>
                <button onClick={() =>{
                    getChars(valor);
                }}>Buscar</button>
            </header>
            <div id="pagina">
                <div id="caja"></div>
                <div id="items">
                {coctel.map(char =>
                            <Coctail key={char.idDrink} char = {char} />,
                    )}
                </div>
            </div>    
        </div>
    )
}

export default Coctails;
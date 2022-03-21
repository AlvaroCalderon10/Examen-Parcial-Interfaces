import React, {FC,useState, useEffect} from "react";

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

type ingredient={
    name:string;
    url:string;
}

const Info: FC <{char:cocteles}> = ({char}) => {
    const url=char.strDrinkThumb+"/preview";

    const getIngredients = () => {
        let items:ingredient[]=([]);
        let pushing:ingredient={
            name: "",
            url: ""
        };
        if(char.strIngredient1!=null){
            
            pushing.name=char.strIngredient1;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient1}.png`
            items.push(pushing);
        }else if(char.strIngredient2!=null){
            pushing.name=char.strIngredient2;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient2}.png`
            items.push(pushing);
            
        }else if(char.strIngredient3!=null){
            pushing.name=char.strIngredient3;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient3}.png`
            items.push(pushing);
        }else if(char.strIngredient4!=null){
            pushing.name=char.strIngredient4;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient4}.png`
            items.push(pushing);
        }else if(char.strIngredient5!=null){
            pushing.name=char.strIngredient5;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient5}.png`
            items.push(pushing);
        }else if(char.strIngredient6!=null){
            pushing.name=char.strIngredient6;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient6}.png`
            items.push(pushing);
        }else if(char.strIngredient7!=null){
            pushing.name=char.strIngredient7;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient7}.png`
            items.push(pushing);
        }else if(char.strIngredient8!=null){
            pushing.name=char.strIngredient8;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient8}.png`
            items.push(pushing);
        }else if(char.strIngredient9!=null){
            pushing.name=char.strIngredient9;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient9}.png`
            items.push(pushing);
        }else if(char.strIngredient10!=null){
            pushing.name=char.strIngredient10;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient10}.png`
            items.push(pushing);
        }else if(char.strIngredient11!=null){
            pushing.name=char.strIngredient11;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient11}.png`
            items.push(pushing);
        }else if(char.strIngredient12!=null){
            pushing.name=char.strIngredient12;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient12}.png`
            items.push(pushing);
        }else if(char.strIngredient13!=null){
            pushing.name=char.strIngredient7;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient13}.png`
            items.push(pushing);
        }else if(char.strIngredient14!=null){
            pushing.name=char.strIngredient14;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient14}.png`
            items.push(pushing);
        }else if(char.strIngredient15!=null){
            pushing.name=char.strIngredient15;
            pushing.url=`https://www.thecocktaildb.com/images/ingredients/${char.strIngredient15}.png`
            items.push(pushing);
        }
        if(items.length==0){
            items.push(pushing);
        }
        setIngredientes(items);
        console.log(ingredientes);
    };

    const [ingredientes,setIngredientes] = useState<ingredient[]>();

    useEffect(() => {
        getIngredients();
    }, []);

    return(
        <div id="global">
            <div id="principal">
                <img src={url} />
                {char.strDrink}
            </div>
            <div id="ingri">
                {ingredientes !== undefined && ingredientes.map((elem) =>
                                <div key={char.idDrink+"ingred"}>
                                    {elem.name}
                                    {ingredientes.length}
                                     <img src={elem.url} /> 
                                </div>)}
            </div>
            <div id="tags">
                    {char.strTags}
            </div>

        </div>
    )
}
export default Info;
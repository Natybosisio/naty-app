import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemIndividual from "../components/ItemDetail";

const ItemDetailContainer = (data) => {

    const { productoTitle} = useParams();

    const [item, setItem]= useState(0)

    useEffect(()=>{
        setTimeout(async() => {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas') 
            const data = await response.json();
            setItem(data.results[0]);
        }, 2000);
        
    },[] );
  

    return(
        <>
        <ItemIndividual item={item} setItem={setItem}/>
        </>
    )
}


export default ItemDetailContainer;
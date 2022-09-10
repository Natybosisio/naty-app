import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = (data) => {

    const [item, setItem]= useState(0)

    const {itemId} = useParams()

    useEffect(()=>{
        setTimeout(async() => {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas') 
            const data = await response.json();
            setItem(data.results[0]);
        }, 2000);
        
    },[itemId] );
  
    console.log(item)
    return(
        <>
        <ItemDetail item={item} />
        </>
    )
}


export default ItemDetailContainer;
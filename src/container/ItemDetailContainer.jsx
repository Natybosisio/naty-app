import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import ItemListContainer from "./ItemListContainer";

const ItemDetailContainer = () => {

    const [item, setItem]= useState(0)

    const {itemId} = useParams()

    console.log(item)
    useEffect(()=>{
        setTimeout(async() => {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas') 
             
            const data = await response.json();
            setItem(data.results[0])
            
            console.log(data)
      
        }, 2000);
        
    },[itemId] );
  
    
    return(
        <>
        <ItemDetail item={item} />
        </>
    )
}


export default ItemDetailContainer;



// `${d}`
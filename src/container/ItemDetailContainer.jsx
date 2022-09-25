import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem]= useState(0)

    const {itemId} = useParams()
    
    console.log(itemId)
    
        useEffect(() => {
       
            const docR = getDocs("productos", itemId);
    
            getDocs(docR).then((doc) => {
              const docs = {
                id: doc.id,
                ...doc.data()
            }
            setItem(docs)
            })
        
    }, [itemId]);
    
    
  
    
    return(
        <>
        <ItemDetail item={item} />
        </>
    )
}


export default ItemDetailContainer;




// `${d}`
        
// useEffect(()=>{
//     setTimeout(async () => {
// 		const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
// 		const data = await response.json();
// 		setItem(data);
// 	}, 2000);
// }, [itemId]);
    
  

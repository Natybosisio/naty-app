import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Item  from "./Item";

const ItemList = ({productos}) => {

const [products, setProducts] = useState([]);

useEffect(() => {
   
        const db = getFirestore();
        const items = collection(db, "productos");
        getDocs(items).then((snapshot) => {
          const docs = snapshot.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
          }))
       
        setProducts(docs)
  
        });
}, []);


    return (
            <div className="row m-5" >
            
                {products.map(product => {
                    return (
                    <div className="col-3" key={product.id}  >
                        <Item product={product}/>
                    </div>
                    )
                })}          
                
          
            </div>
            )
}


export default ItemList;



    
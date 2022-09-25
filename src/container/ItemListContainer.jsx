import React, { isValidElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "../components/ItemList";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

const [id, setId]= useState('')

const inputId = (ev)=>{
    setId(ev.target.value)
}

const [products, setProducts] = useState([]);


        useEffect(() => {
            const db = getFirestore();
            const items = collection(db, "productos");
            getDocs(items).then((snapshot) => {
              const docs = snapshot.docs.map(doc =>({
                id: doc.id,
                ...doc.data()
              }))
           
            setId(docs)
            });
           
    }, [id]);



    return (

        <div className="">
            <input onChange={inputId} value={id}/>
            
            <div className='listaCategory col-12'>
            <h1>ESTOS SON NUESTROS PRODUCTOS</h1>
            </div>
            <div>
            <ItemList productos={id} />
            </div>
        </div>   
        )

}

export default ItemListContainer;
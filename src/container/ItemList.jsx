import React, { useEffect, useState } from "react";
import Item  from "./../components/Item";
import ItemCount from "./ItemCount";

const ItemList = () => {
    const [productos, setProductos] = useState([])

    const mostrarProductos = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas')
            const data = await response.json();
            setProductos(data.results);
        } catch (e) {
            alert('ocurrio un error, intente mas tarde')
        }        
        
    }
    useEffect(()=>{
        mostrarProductos();
    },[] );

    console.log(productos)

    return (
            <div className="row m-5">
                {productos.map(producto => {
                    return (
                    <div className="col-3">
                    <Item producto={producto}/>
                    <ItemCount stock="5" initial="1"/>
                    </div>
                    )
                })}          
                
            </div>
            )
}


export default ItemList;



    
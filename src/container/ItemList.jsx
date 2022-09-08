import React, { useEffect, useState } from "react";
import Item  from "./../components/Item";


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
                   
                    </div>
                    )
                })}          
                
            </div>
            )
}


export default ItemList;



    
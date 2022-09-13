import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ItemList from "../components/ItemList";


const ItemListContainer = () => {

const [productos, setProductos] = useState([])

const {category_ID} = useParams()

const mostrarProductos = async () => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Joyas`)
        const data = await response.json();
        const result = data.results;


        console.log(result)
        if(category_ID === undefined){
            setProductos(result);
        }
        else{
            setProductos(result.filter((data) => data.category_id === category_ID))
        }
        
    } catch (e) {
        alert('ocurrio un error, intente mas tarde')
    }

}
    useEffect(() => {
                
        mostrarProductos()
    }, [category_ID]);



    return (

        <div className="">
            <div className='listaCategory col-12'>
            <h1>ESTOS SON NUESTROS PRODUCTOS</h1>
            </div>
            <div>
            <ItemList productos={productos} />
            </div>
        </div>   
        )

}

export default ItemListContainer;
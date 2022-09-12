import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ItemList from "../components/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

const {category_ID} = useParams()

console.log(category_ID)

const mostrarProductos = async () => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Joyas`)
        const data = await response.json();

        if(data !== category_ID){
            setProductos(data.results);
        }
        else{
            setProductos(data.filter((data) => data.category_id === category_ID))
        }

        
    } catch (e) {
        alert('ocurrio un error, intente mas tarde')
    }

}
    useEffect(() => {
                
        mostrarProductos()
       
    }, []);



    return (

        <div className="row">
            <div className='listaCategory col-10'>
            <Link to={`category/${productos.category_id}`}>
                <li className="tex-decor">Oro</li>
            </Link>
            <Link to={`category/${productos.category_id}`}>
                <li className="">Plata</li>
            </Link>
            <Link to={`category/${productos.category_id}`}>
                <li className="">Piedras</li>
            </Link>
            </div>
            <div className='listaCategory col-10'>
            <h1>ESTOS SON NUESTROS PRODUCTOS</h1>
            </div>
            <div>
             <ItemList productos={productos} />
            </div>
        </div>   
        )

}

export default ItemListContainer;
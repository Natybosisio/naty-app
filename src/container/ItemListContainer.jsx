import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ItemList from "../components/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([0])

    const mostrarProductos = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=joyas')
            const data = await response.json();
            setProductos(data.results);
        } catch (e) {
            alert('ocurrio un error, intente mas tarde')
        }

    }
    useEffect(() => {
        mostrarProductos();
    }, []);

    console.log(productos)

    return (

        <div className='listaCategory'>
            <Link to="/producto">
                <li className="">Oro</li>
            </Link>
            <Link to="/producto">
                <li className="">Plata</li>
            </Link>
            <Link to="/producto">
                <li className="">Piedras</li>
            </Link>
            <hr/>
            <hr/>
            <h1>ESTOS SON NUESTROS PRODUCTOS</h1>
            <ItemList productos={productos} />
        </div>


    )

}

export default ItemListContainer;
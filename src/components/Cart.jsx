import React, { useContext, useState, useEffect } from "react";
import { Context } from '../context/CartContex';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

//ESTE LO COPIE DEL AFTER CLASS- ENTIENDO QUE ES DEL DESAFIO Q SE ENTREGA EL LUNES


const Cart = () => {
    const { carrito, clear, total } = useContext(Context)
const [precioTotal, setPrecioTotal] = useState(0)
 
useEffect(()=>{
 setPrecioTotal(total())

    }, [carrito])

    return (
        <>
            {carrito.length > 0 ? (
                <>
                    {carrito.map((element) => (
                        <CartItem item={element} />))}
                    <button onClick={clear}>borrar</button>
                </>)
                : (<>
                    <h2>Su carrito esta Vacio</h2>
                    <Link to="/categorias" className="btn btn-success my-2 mx-2">Ver productos disponibles</Link>
                    <Link to="/" className="btn btn-primary my-2">Volver al Home</Link>
                    </>
                )
            }
        </>)

}

export default Cart;
import { useContext } from "react";
import React from "react";
import CartContext from "../context/CartContex";

//ESTE LO COPIE DEL AFTER CLASS- ENTIENDO QUE ES DEL DESAFIO Q SE ENTREGA EL LUNES

const CartItem = ({item})=>{
const {removeItem} = useContext(CartContext)

const borrar = ()=>{
    removeItem(item.id)
};

    return(
        <>
        <h2>{item.title} - {item.cantidad}</h2>
        <button onClick={borrar}> Borrar </button>
        </>
        )
}


export default CartItem;
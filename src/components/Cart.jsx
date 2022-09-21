import React,{useContext} from "react";
import CartContext from '../context/CartContex';
import CartItem from "./CartItem";

const Cart = ()=>{
    const {carrito} = useContext(CartContext)
    return carrito.map((element)=> <CartItem item={element}/>)
}
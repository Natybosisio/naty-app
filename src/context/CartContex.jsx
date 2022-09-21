import React, { useState, useContext, useEffect } from "react";


export const CartContext = React.createContext([]);

export const useCart = () => useContext(CartContext)

export const CarritoProviader = ({ children }) => {

const [ carrito, setCarrito] = useState([0]);


const addItem =(item, cantidad)=>{
    const anterior = isInCart(item.id)
    if(anterior){
        const arreglo = carrito.filter((e)=> e.id !== item.id)
        item.cantidad = cantidad + anterior.cantidad;
        arreglo.push(item)
        setCarrito(arreglo)
        console.log(arreglo)
    }
   
    else{
        item.cantidad = cantidad;
        setCarrito([...carrito, item]);
     
        
    }
}
const isInCart = (itemId)=>{
    return carrito.find((e)=>e.id === itemId)
}


const clear = ()=>{
    carrito([]);
}



    return (
        <CartContext.Provider value={{ addItem, carrito, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default  CartContext;
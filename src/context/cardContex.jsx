import React, { useState, useContext, useEffect } from "react";


export const CartContext = React.createContext([]);

export const useCart = () => useContext(CartContext)

export const CarritoProviader = ({ children }) => {

const [producto, setProducto]= useState(0)

const [ carrito, setCarrito] = useState(0);

const addCarrito =()=>{

}
  
    return (
        <CartContext.Provider value={{ carrito, addCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default  CartContext;
import React, { useState, useContext, useEffect, } from "react";
import { createContext } from "react";


export const Context = createContext('');


export const CartContex = ({ children }) => {

const [ carrito, setCarrito] = useState(0);

const clear = ()=>{
    carrito([]);
}



    return (
        
        <Context.Provider value={{carrito, clear}}>
            {children}
        </Context.Provider>
    )
}

export default  CartContex;
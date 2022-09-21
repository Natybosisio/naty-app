import React from "react";

const CartItem = ({item})=>{
    return(
        <>
        <h2>{item.title} - {item.cantidad}</h2>
      
        </>
        )
}


export default CartItem;
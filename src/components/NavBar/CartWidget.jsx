import React from "react";
import Carrito from "./Images/cesteria.png";

function CartWidget (){

    return(
    <a href="././inicioSesion.js">  <img src={Carrito} className="img-carrito" alt="carrito"></img>
    </a>
    )
}

export default CartWidget;
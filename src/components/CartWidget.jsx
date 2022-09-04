import React from "react";
import Carrito from "./Images/cesteria.png";


function CartWidget (){

    return(
        <div>
    <a href="././inicioSesion.js">  <img src={Carrito} className="img-carrito" alt="carrito"></img>
        </a>
    <p>Usted tiene XXX en el carrito</p>
    </div>
    )
}

export default CartWidget;
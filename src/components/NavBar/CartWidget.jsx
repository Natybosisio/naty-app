import React from "react";
import Carrito from "./Images/cesteria.png";
import ItemCount from "../../container/ItemCount";

function CartWidget (){

    return(
        <div>
    <a href="././inicioSesion.js">  <img src={Carrito} className="img-carrito" alt="carrito"></img>
    </a>
    
    </div>
    )
}

export default CartWidget;
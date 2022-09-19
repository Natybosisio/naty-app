import React, {useContext} from "react";
import Carrito from "./Images/cesteria.png";
import "../CartWidget.css";
import CardContext, { useCartContext} from '../context/cardContex'

function CartWidget (){

    const {carrito} = useContext(CardContext);

    return(
    <div className="carrito row">
    <a href="././inicioSesion.js">  <img src={Carrito} className="img-carrito" alt="carrito"></img>
        </a>
    <p className="">Usted tiene {carrito} en el carrito</p>
    </div>
    )
}

export default CartWidget;
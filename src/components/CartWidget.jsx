import React, {useContext} from "react";
import CarritoImg from "./Images/cesteria.png";
import "../CartWidget.css";
import {Context} from '../context/CartContex'

function CartWidget (){

    const {carrito} = useContext(Context);

    return(
    <div className="carrito row">
    <a href="././inicioSesion.js">  <img src={CarritoImg} className="img-carrito" alt="carrito"></img>
        </a>
    <p className="">Usted tiene {carrito} en el carrito</p>
    </div>
    )
}

export default CartWidget;
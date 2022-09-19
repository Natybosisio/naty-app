import React, { useState, useEffect, useContext } from "react";
import CardContext, { useCart} from '../context/cardContex'

const ItemCount = ({stock, initial})=>{
    
        const {carrito, addCarrito} =  useContext(CardContext);    
        const {productos, setProductos} = useContext(CardContext);  

const cart = useCart()

        const disminuir = ()=>{
            if(carrito >= initial){
                addCarrito(carrito-1)
            }
            else{
                alert('el carrito esta vacio')
            }
                    }

        const aumentar = (carrito) =>{
            if(carrito < initial){
                let cargar = carrito + 1

                addCarrito(cargar)
            }
            else{
                alert('stock insuficiente')
            }
        
        }   
        console.log(carrito)
        const agregar = ()=>{
            setProductos(alert(`se agregaron ${carrito} productos al carrito `))
           
            }
        
        return(
            <div className="itemCount">
                <button className="controles" onClick={disminuir}>-</button>
                <span>{carrito}</span>
                <button className="controles" onClick={aumentar}>+</button>                
                <button className="" onClick={agregar}>Agregar</button>
            
            </div>
        );

}


export default ItemCount;




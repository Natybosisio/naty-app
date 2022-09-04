import React, { useState, useEffect } from "react";


const ItemCount = ({stock, initial})=>{
        const [carrito, setCarrito] = useState(0);    
        const [producto, setProducto] = useState(0);

        const disminuir = ()=>{
            if(carrito >= initial){
                setCarrito(carrito-1)
            }
            
                    }

        const aumentar = () =>{
            if(carrito < stock){
                setCarrito(carrito+1)
            }
        
        }   
        
        const agregar = ()=>{
            setProducto(carrito)
        
            }
        
        useEffect(()=>{
            agregar()
                }, [carrito])

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




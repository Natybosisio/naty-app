import React, { useState, useEffect} from "react";


const ItemCount = ({stock, initial})=>{

const {countProd, setCountProd} =  useState(initial);    

       
useEffect(()=>{
    if(initial > stock && stock > 0){
        alert("El valor inicial no puede ser mayor al stock")
        setCountProd(1)
    }
    if(stock === 0){
      setCountProd(1);
    }

},[initial, stock])

        const disminuir = ()=>{
            if(countProd >= initial)setCountProd(countProd - 1)
                }

        const aumentar = () =>{
            if(countProd < stock)setCountProd(countProd + 1)
            }   
        console.log(setCountProd)//es UNDEFINED


        const agregar = ()=>{
            setCountProd(alert("se agrego"))

            }
        
        return(
            <div className="itemCount">
                <button className="controles" onClick={disminuir}>-</button>
                <span>{countProd}</span>
                <button className="controles" onClick={aumentar}>+</button>                
                <button className="" onClick={agregar}>Agregar</button>
            
            </div>
        );

}


export default ItemCount;




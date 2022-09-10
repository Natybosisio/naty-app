import React from "react";
import Item  from "./Item";

const ItemList = ({productos}) => {

    return (
            <div className="row m-5">
            
                {productos.map(producto => {
                    return (
                    <div className="col-3">
                        <Item producto={producto}/>
                    </div>
                    )
                })}          
                
          
            </div>
            )
}


export default ItemList;



    
import React from "react";


const ItemListContainer = ({greeting, children}) =>{
    return(
        <div>
        <p className="titleItem"> {greeting} </p>
        
        </div>
    )
}

export default ItemListContainer;
import React from "react";


const ItemListContainer = ({ greeting, children }) => {
    return (
        <div clasName="">

            <li clasName="">Oro</li>
            <li clasName="">Plata</li>
            <li clasName="">Piedras</li>
            <li clasName="">Ofertas</li>
            <p className="titleItem"> {greeting} </p>
       
        </div>
    )
}

export default ItemListContainer;
import React from 'react';
import { useParams } from 'react-router-dom';

import ItemCount from "../container/ItemCount"

const ItemDetail = ({item, data}) => {

    const {itemId} = useParams()

    return (
        <div className="card">
            <div className="card-body">
                <img src={item.thumbnail} alt="Imagen de Producto" />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Anillos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore voluptas pariatur animi voluptate, itaque quam sequi libero tempora praesentium ducimus nam quas labore. Voluptates vero tempore beatae sequi ipsa.</p>
                <p className="card-text">${item.price}</p>
                
            </div>
        <ItemCount initial="1" stock="5"/>
        </div>
    )
}

export default ItemDetail;
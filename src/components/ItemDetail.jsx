import React from 'react';
import ItemCount from "../container/ItemCount"
import "../ItemDetail.css";


const ItemDetail = ({item}) => {

    
    return (
        <div className="m-5">
            <div className="card-body row">
                <div className="col-6">
                <img className='img' src={item.thumbnail} alt="Imagen de Producto" />
                <h5 className="card-title">{item.title}</h5>
                </div>
                <div className="col-6">
                <p className="card-text">Incluir descripcion del producto. ML no tiene incluido este item</p>
                <p className="card-text">${item.price}</p>
                <ItemCount  initial="1" stock="5"/>     
                </div>
            </div>
        
        </div>
    )
}

export default ItemDetail;
import React, { useContext, useState } from 'react';
import ItemCount from "../container/ItemCount"
import "../ItemDetail.css";
import CartContext from '../context/CartContex';

const ItemDetail = ({ item }) => {

const [cantidad, setCantidad] = useState(0);

    const { addItem } = useContext(CartContext)

    const onAdd = (cant)=>{
        addItem(item, cant)
        setCantidad(cantidad + cant)
    }
    console.log(cantidad)

    return (
        <div className="m-5">
            <div className="card-body row">
                <div className="col-6">
                    <img className='img-detail' src={item.thumbnail} alt="Imagen de Producto" />
                    <h5 className="card-title">{item.title}</h5>
                </div>
                <div className="col-6">
                    <p className="card-text">Incluir descripcion del producto. ML no tiene incluido este item</p>
                    <p className="card-text">${item.price}</p>
                    <ItemCount initial='1' stock='5' onAdd={onAdd} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;
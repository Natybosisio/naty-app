import React from 'react';

const Item = ({producto}) => {
    return (
        <div className='container'>
            <div className='row align-items-start'>
            <h4>{producto.title}</h4>
            <img src={producto.thumbnail} alt="Imagen" />
            <p>{producto.price}</p>
            <button>comprar</button>
        </div>
        </div>
    )

}

export default Item;
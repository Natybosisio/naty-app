import React from 'react';

const Item = ({producto}) => {
    return (
        <div className='container'>
            <div className='cards'>
                <img className='cards-img' src={producto.thumbnail} alt="Imagen"/>
                <h4 className=''>{producto.title}</h4>
                <p>${producto.price}</p>
                <button>comprar</button>
            </div>
        </div>
    )

}

export default Item;
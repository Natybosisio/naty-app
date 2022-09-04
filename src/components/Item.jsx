import React from 'react';



const Item = ({producto}) => {
    return (
    <div className="card">
        <img src={producto.thumbnail} className="cards-img" alt="IMAGEN"/>
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">${producto.price}</p>
        </div>
    </div>
    )

}

export default Item;




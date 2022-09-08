import React from 'react';
import { Link} from "react-router-dom"



const Item = ({producto}) => {
    return (
    <div className="card">
        <img src={producto.thumbnail} className="cards-img" alt="IMAGEN"/>
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">${producto.price}</p>
          <Link to={"/producto"}>
          <button> Ver Mas</button>
          </Link>
        </div>
    </div>
    )

}

export default Item;




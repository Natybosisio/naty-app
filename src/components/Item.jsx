import React from 'react';
import { Link} from "react-router-dom"



const Item = ({producto}) => {
    return (
   
    <div className="card" key={producto.id}>
        <img src={producto.thumbnail} className="cards-img" alt="IMAGEN"/>
        <div className="">
          <h5 className="span">{producto.title}</h5>
          <p>{producto.id}</p>
          <Link to='/producto/:itemId'>
          <button> Ver Mas</button>
          </Link>
        </div>
    </div>
    )

}

export default Item;




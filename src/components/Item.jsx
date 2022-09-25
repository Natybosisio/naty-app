import React from 'react';
import { Link} from "react-router-dom"

//product es UNDEFIENDED

const Item = ({product}) => {
    return (
   
    <div className="card" >
        <div className="posicion-card">
        <img src={product.image} className="cards-img" alt="IMAGEN"/>
          <h5 className="title-card">{product.title}</h5>
          <h5>{product.description}</h5> 
          <h5>${product.price}</h5>
          <Link to={`producto/${product.id}`}>
          <button className='boton-ver'> Ver Mas</button>
          </Link>
        </div>
    </div>
    )

}

export default Item;




import React from 'react';
import { Link} from "react-router-dom"



const Item = ({producto, category}) => {
    return (
   
    <div className="card" >
        <div className="posicion-card">
        <img src={producto.thumbnail} className="cards-img" alt="IMAGEN"/>
          <h5 className="title-card">{producto.title}</h5>
          <Link to={`producto/${producto.id}`}>
          <button className='boton-ver'> Ver Mas</button>
          </Link>
        </div>
    </div>
    )

}

export default Item;




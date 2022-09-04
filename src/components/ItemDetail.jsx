import React from 'react';


const ItemIndividual = ({ item, setItem }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={item.thumbnail} />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Anillos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore voluptas pariatur animi voluptate, itaque quam sequi libero tempora praesentium ducimus nam quas labore. Voluptates vero tempore beatae sequi ipsa.</p>
                <p className="card-text">${item.price}</p>
            </div>
        </div>
    )
}

export default ItemIndividual;
import React from 'react';


export function Plasticcard({ title, disc, image, button, onAddToCart }){
    return(
        <div className="cardplas">
            <img src={image} alt={title} className="imgplas" />
            <div className="card-bodyplas">
                <h3>{title}</h3>
                <p>{disc}</p>
            </div>
            <button className="btnplas" onClick={onAddToCart}>
                {button}
            </button>
        </div>  
    )
};
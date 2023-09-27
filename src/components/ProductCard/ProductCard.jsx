import React from 'react';

function ProductCard({productLabel, productImg, productImgAlt, productDesc, productPrice }) {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImg} alt={productImgAlt}/>
            <p>{productDesc}</p>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default ProductCard;
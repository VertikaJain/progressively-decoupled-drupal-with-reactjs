import React from 'react'

const Product = (props) => {
    const { product } = props;
    return <div className="product-content">
        <img src={product.field_product_image} alt="product" />
        <h3>{product.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>₹{product.field_price}</h6>
        <button className="buy-1">Buy Now</button>
    </div>
}

export default Product

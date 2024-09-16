import React from 'react';

function ProductItem({ product, addToCart }) {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;


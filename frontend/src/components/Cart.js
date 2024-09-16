import React from 'react';

function Cart({ cart }) {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;

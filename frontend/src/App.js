import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Import App-specific CSS

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="App">
            <h1>E-Commerce App</h1>
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
}

export default App;


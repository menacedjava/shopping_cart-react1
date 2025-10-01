import React, { useState } from 'react';

export default function App() {
    const [cart, setCart] = useState([]);
    const products = ['Laptop', 'Phone', 'Tablet'];

    const addToCart = (item) => setCart([...cart, item]);

    return (
        <div>
            <h1>Shop</h1>
            {products.map(p => (
                <div key={p}>
                    {p} <button onClick={() => addToCart(p)}>Add</button>
                </div>
            ))}
            <h2>Cart</h2>
            <ul>{cart.map((c,i) => <li key={i}>{c}</li>)}</ul>
        </div>
    );
}

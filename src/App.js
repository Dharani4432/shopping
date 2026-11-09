import React, { useState } from 'react';

import Header from './Header';
import Cart from './Cart';
import productData from './productData';

let data = (val, index, addToCart) => {
    return (
        <Cart
            key={index}
            productImage={val.productImage}
            productName={val.productName}
            productCategory={val.productCategory}
            productPrice={val.productPrice}
            oldPrice={val.oldPrice}
            productInfo={val.productInfo}
            productRating={'⭐ '.repeat(val.productRating).trim()}
            onAddToCart={(options) => addToCart(val, options)}
        />
    );
}

let App = () => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product, options) => {
        setCartItems((items) => [...items, { ...product, ...options }]);
    };
    const removeFromCart = (itemIndex) => {
        setCartItems((items) => items.filter((_, index) => index !== itemIndex));
    };
    const cartTotal = cartItems.reduce((total, item) => total + Number(item.productPrice), 0);

    return (
        <>
            <Header />

            <section aria-label="Shopping cart" style={{ margin: '20px', padding: '10px', border: '1px solid #ddd' }}>
                <h3>Shopping cart ({cartItems.length})</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={`${item.productName}-${item.size}-${item.color}-${index}`}>
                                    {item.productName} — Size {item.size}, {item.color} — ₹{item.productPrice}{' '}
                                    <button type="button" onClick={() => removeFromCart(index)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: ₹{cartTotal.toFixed(2)}</p>
                    </>
                )}
            </section>

            <div>
                {productData.map((product, index) => data(product, index, addToCart))}
            </div>
        </>
    );
}

export default App;
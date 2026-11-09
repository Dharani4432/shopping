import React, { useState } from 'react';


let Cart = (props) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    return (
        <div className="cart">
            <img src={props.productImage} alt={props.productName} width="300" height="300" className="product_img" />

            <h1 className="product_font"> {props.productName}  </h1>
            <h2>Category :  {props.productCategory}  </h2>

            <h3>M.R.P : <i className="fa fa-inr" aria-hidden="true"></i>  <del>{props.oldPrice} </del>  </h3>
            <h3>Price :  <i className="fa fa-inr" aria-hidden="true"></i> <ins> {props.productPrice}</ins>   <p><i>(Inclusive all taxes)</i></p> </h3>
            <h4>Rating : {props.productRating}</h4>

            <div className="size">
                <div>
                    <h3>SIZE:</h3>
                    <div className="options">
                        {[7, 8, 9, 10, 11].map((size) => (
                            <button
                                type="button"
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                aria-pressed={selectedSize === size}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>COLOR:</h3>
                    <div className="options">
                        {[
                            { name: 'Yellow', className: 'yellow' },
                            { name: 'Black', className: 'black' },
                            { name: 'Blue', className: 'blue' }
                        ].map((color) => (
                            <button
                                type="button"
                                key={color.name}
                                className={`color-option ${color.className} ${selectedColor === color.name ? 'selected' : ''}`}
                                aria-label={color.name}
                                aria-pressed={selectedColor === color.name}
                                onClick={() => setSelectedColor(color.name)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="button"
                disabled={!selectedSize || !selectedColor}
                onClick={() => props.onAddToCart({ size: selectedSize, color: selectedColor })}
            >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart
            </button>
        </div>
    );
}

export default Cart;
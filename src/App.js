import React from 'react';

import Header from './Header';
import Cart from './Cart';
import productData from './productData'
import Footer from './Footer';

let data = (val) => {

    function rate() {
        if (val.productRating === 1) {
            return `⭐`;
        }
        else if (val.productRating === 2) {
            return `⭐ ⭐`;
        }
        else if (val.productRating === 3) {
            return `⭐ ⭐ ⭐ `;
        }
        else if (val.productRating === 4) {
            return `⭐ ⭐ ⭐ ⭐`;
        }
        else if (val.productRating === 5) {
            return `⭐ ⭐ ⭐ ⭐ ⭐`;
        }

    }




    return (
        <Cart
            productImage={val.productImage}
            productName={val.productName}
            productCategory={val.productCategory}
            productPrice={val.productPrice}
            oldPrice={val.oldPrice}
            productInfo={val.productInfo}
            productRating={rate()}
        />

    );

}

let App = () => {
    return (
        <>
            <Header />
            <div>

            {productData.map(data)}

            </div>
            {/* <Footer /> */}

        </>
    );
}

export default App;
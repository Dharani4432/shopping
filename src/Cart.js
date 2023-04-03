import React from 'react';


let Cart = (props) => {
    return (
        <div className="cart">
            

            <img src={props.productImage}  alt="  found error  " width="300" height="300" className="product_img" />
            

            <h1 className="product_font"> {props.productName}  </h1>
            <h2>Category :  {props.productCategory}  </h2>

            <h3>M.R.P : <i class="fa fa-inr" aria-hidden="true"></i>  <del>{props.oldPrice} </del>  </h3>
            <h3>Price :  <i class="fa fa-inr" aria-hidden="true"></i> <ins> {props.productPrice}</ins>   <p><i>(Inclusive all taxes)</i></p> </h3>
            <h4>Rating : {props.productRating}</h4>

            {/* <h4>product Info : {props.productInfo} </h4> */}
<div className="size">
            <ul>
          <li> <h3> SIZE: </h3></li>
          <li class="bg">7</li>
          <li class="bg">8</li>
          <li class="bg">9</li>
          <li class="bg">10</li>
          <li class="bg">11</li>
        </ul>
        <ul>
          <li><h3>COLOR:</h3></li>
          <li class="yellow"></li>
          <li class="black"></li>
          <li class="blue"></li>
        </ul>
        </div>
        <center>
            <button className="button"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart </button>
            </center>
        <br></br>


        </div>

    );
}

export default Cart;
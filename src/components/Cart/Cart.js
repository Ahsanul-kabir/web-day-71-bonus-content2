import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    // const totalPrice = cart.reduce((total,product) => total + product.price,0);
    // another way
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
        // debugger;
    }

    let shpping = 0; // defaul dore nilam
    if(totalPrice > 35){
        shpping = 0;
    }
    else if(totalPrice > 15){
        shpping = 4.99;
    }
    else if(totalPrice > 0){
        shpping = 12.99;
    }

    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shpping + Number(tax)).toFixed(2)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
           <h3>Order Summary</h3>
           <p>Items ordered: {cart.length}</p>
           <p>Product Price: {formatNumber(totalPrice)}</p>
           <p><small>Shipping Cost: {shpping}</small></p>
           <p><small>Tax + VAT {tax}</small></p>
           <p>Total Price: {grandTotal}</p>
           <br/>
           {
               props.children
           }
        </div>
    );
};

export default Cart;
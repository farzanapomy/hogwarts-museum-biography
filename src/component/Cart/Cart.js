import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for (const card of cart) {
        total=total+card.price
    }

    return (
        <div>
            <h3>Name: {cart.name}</h3>
            <h3>Total Added: {props.cart.length}</h3>
            <h4>Total Price : {total.toFixed(3)}</h4>
        </div>
    );
};

export default Cart;
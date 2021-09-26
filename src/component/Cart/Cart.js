import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = [];
    for (const card of cart) {
        total = total + card.price
        name = name + '\n' + card.name;

    }

    return (
        <div className='cart-section'>
            <h5>Name: {cart.name}</h5>
            <h5>Total Added: {props.cart.length}</h5>
            <h5>Total Price : $ {total}</h5>
            <div className='cart-name'>
            <ul>
                   {
                       cart.map( card=> <li>Name: {card.name}</li>)
                   }
               </ul>
            </div>
        </div>
    );
};

export default Cart;
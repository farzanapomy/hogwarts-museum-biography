// import files
import React from 'react';
import './Cart.css'
// import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = [];
    const cartIcons = <FontAwesomeIcon icon={faUser} />
    for (const card of cart) {
        total = total + card.salary
        name = name + '\n' + card.name;

    }

    return (
        <div className='cart-section'>
            <h5>{cartIcons} Total Added: {props.cart.length}</h5>
            <h5>Total Salary : $ {total}</h5>
            <div className='cart-name'>
                <ol>
                    {
                        cart.map(card => <li>Name: {card.name}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default Cart;
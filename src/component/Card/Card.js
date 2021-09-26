import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    console.log(props)
    const { name, img, family, age, price } = props.card
    const cartIcon = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className='card-section'>

            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Father :  {family.fatherName}</p>
            <p>Mother :  {family.motherName}</p>
            <p>Age : {age}</p>
            <h4>Price : $ {price}</h4>
            <button
                onClick={() => props.addToCart(props.card)}
                className='cart-button'>{cartIcon}
                Add To Cart</button>
           

        </div>
    );
};

export default Card;
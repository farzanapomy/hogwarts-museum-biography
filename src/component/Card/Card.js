import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const { name, img, family, age, price } = props.card
    return (
        <div className='card-section'>
           
                <img className='card-img' src={img} alt="" />
                <h3>{name}</h3>
                <p>Father :  {family.fatherName}</p>
                <p>Mother :  {family.motherName}</p>
                <p>Age : {age}</p>
                <h4>Price : $ {price}</h4>
                <button 
                    onClick={() => props.addToCart(props.card)}
                    className='cart-button'>
                    Add To Cart</button>
          
        </div>
    );
};

export default Card;
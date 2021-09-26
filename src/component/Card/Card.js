// import files 
import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFilm } from '@fortawesome/free-solid-svg-icons'

// load ui 
const Card = (props) => {
    // console.log(props)
    const { name, img, family, age, salary } = props.card
    const cartIcon = <FontAwesomeIcon icon={faFilm} />

    return (
        <div className='card-section'>

            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Father :  {family.fatherName}</p>
            <p>Mother :  {family.motherName}</p>
            <p>Age : {age}</p>
            <h4>Salary : $ {salary}</h4>
            <button
                onClick={() => props.addToCart(props.card)}
                className='cart-button'>{cartIcon} Cast details</button>

        </div>
    );
};

export default Card;
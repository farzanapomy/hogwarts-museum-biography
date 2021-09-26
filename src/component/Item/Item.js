// import files 
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Item.css'

// load ui 
const Item = () => {
    const [cards, setCard] = useState([])
    const [cart, setCart] = useState([]);

    // load data 
    useEffect(() => {
        fetch('./characters.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    // handle button 

    const addToCart = card => {
        const newCart = [...cart, card]
        setCart(newCart);
       
    }

    return (
        <div className='item-container'>
            <div className="card-container">
                {
                    cards.map(card => <Card
                        key={card.salary}
                        card={card}
                        addToCart={addToCart}
                    ></Card>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Item;
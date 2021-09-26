import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Item.css'
const Item = () => {
    const [cards, setCard] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./characters.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const addToCart = card => {
        console.log(card)
        const newCart = [...cart, card]
        setCart(newCart);
        console.log(newCart)
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
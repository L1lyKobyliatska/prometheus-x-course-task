import React, { useEffect, useState, useContext } from 'react';
import './fullCart.css';
import ButtonPurchase from '../buttonPurchase/buttonPurchase';
import { Context } from '../../context/cartProvider';

function FullCart() {
    const book = useContext(Context);
    const [selectedBooks, setSelectedBooks] = useState(JSON.parse(localStorage.getItem('selectedBooks')));

    useEffect(() => {
        setSelectedBooks(book);
        document.querySelector('.button__purchase').removeAttribute('disabled')
    }, []);

    if (!localStorage.authorization) {
        document.location = '/'
    } else {
        if (!localStorage.selectedBooks || book.length === 0) {
            document.location = '/purchase'
        } else {
            const totalPrice = selectedBooks.reduce((acc, selectedBooks) => {
                return acc + selectedBooks.price * selectedBooks.quantity
            }, 0);

            return (
                <div className="cart-container">
                    <ButtonPurchase />
                    <div className='products'>
                        {selectedBooks.map((element) => {
                            return (
                                <div className='products__one' key={element.id}>
                                    <div className='book-title'>
                                        {element.title}
                                    </div>
                                    <div className='book-price'>
                                        {element.price}$
                                    </div>
                                    <div className='count'>
                                        {element.quantity}
                                    </div>
                                    <div className='price'>
                                        {element.price * element.quantity}$
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='total'>
                        Total price, $ {totalPrice}
                    </div>
                </div>

            )
        }

    }
}

export default FullCart;

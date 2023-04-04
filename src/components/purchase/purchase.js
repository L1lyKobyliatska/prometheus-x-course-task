import React from 'react';
import './purchase.css';
import cart from '../../assets/cart.svg';
import ButtonPurchase from '../buttonPurchase/buttonPurchase';

export default function Purchase() {
    if (!localStorage.authorization) {
        document.location = 'prometheus-x-course-task'
    } else {
        return (
            <main>
                <section>
                    <div className="container">
                        <ButtonPurchase />
                        <div className='image'>
                            <img src={cart} alt='cart' />
                            <p>Cart empty...</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
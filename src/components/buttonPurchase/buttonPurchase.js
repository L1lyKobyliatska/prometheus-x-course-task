import React from 'react';
import './buttonPurchase.css';

export default function ButtonPurchase() {
    const cleaner = () => {
        localStorage.removeItem("selectedBooks")
        document.location = '/purchase';
    }

    return (
        <div onClick={cleaner} className='button'>
                <button
                    className='button__purchase'
                    disabled>
                    Purchase
                </button>
        </div>

    )
}
import React, { useState, useEffect } from 'react';
import './counter.css';

function Counter(props) {
    const [quantity, setQuantity] = useState(1),
        [selectedBooks, setSelectedBooks] = useState([]),
        addQuantity = (event) => {
            if (event.target.className === 'up' || event.target.parentElement.className === 'up') {
                if (+quantity > 0 && +quantity < 42) {
                    setQuantity(+quantity + 1)
                }
            } else if (event.target.className === 'down' || event.target.parentElement.className === 'down') {
                if (+quantity > 1 && +quantity < 42) {
                    setQuantity(+quantity - 1)
                }
            }
        },
        changeQuantity = (event) => {
            if (+event.target.value < 1) {
                setQuantity(1)
            } else if (+event.target.value > 42) {
                setQuantity(42)
            } else {
                setQuantity(event.target.value)
            }

        },
        addBooks = (book) => {

            let flag = false;
            selectedBooks.forEach((element) => {
                if (element.id === book.id) {
                    element.quantity += quantity;
                    flag = true;
                } else {
                    return
                }
            });
            if (!flag) {
                book.quantity = quantity;
                setSelectedBooks([
                    ...selectedBooks,
                    book
                ])
            }
            localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks))
        }

    useEffect(() => {
        const raw = localStorage.getItem('selectedBooks');
        localStorage.selectedBooks ? setSelectedBooks(JSON.parse(raw)) : setSelectedBooks([...selectedBooks])
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
    }, [selectedBooks])


    return (
        <div className="price-calculate">
            <div className='price-calculate__price'>Prise, $ <span>{props.book.price}</span></div>
            <p>
                <label htmlFor="spinner">Count</label>
                <input
                    type='number'
                    id="spinner"
                    data-testid='spinner'
                    value={quantity}
                    onChange={changeQuantity} />
                <button
                    className='up'
                    data-testid='up'
                    onClick={addQuantity}><div></div></button>
                <button
                    onClick={addQuantity}
                    className='down'><div></div></button>
            </p>
            <div className='price-calculate__total' id="total">Total price <span>{(quantity * props.book.price).toFixed(2)}</span></div>
            <div className='price-calculate__add-cart'>
                <button
                    className='add-cart'

                    onClick={() => addBooks(props.book)}
                    type="button">
                    Add to cart
                </button>
            </div>
        </div>

    )
}

export default Counter;

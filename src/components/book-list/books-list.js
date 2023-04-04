import React, { useState, useContext } from 'react';
import BookItem from '../bookItem/bookItem';
import { Context } from '../../context/booksProvider';
import './books-list.css';

function BooksList() {
    const book = useContext(Context);
    const [searchWord, setSearchWord] = useState('')
    const [arrBooks, setArrBooks] = useState(book.books)

    const filter = (event) => {
        setSearchWord(event.target.value);

        if (event.target.value.length === 0) {
            setArrBooks(book.books)
        } else {
            setArrBooks(
                book.books.filter((element) => {
                    if (element.title.toLowerCase().includes(searchWord.toLowerCase())) {
                        return true
                    } else {
                        return false
                    }
                }
                )
            )
        }
    }

    function checkValues(event) {
        switch (event.target.value) {
            case '15':
                setArrBooks(
                    book.books.filter((element) => {
                        if (element.price < 15) {
                            return true
                        } else {
                            return false
                        }
                    }
                    )
                );
                break;
            case '15-30':
                setArrBooks(
                    book.books.filter((element) => {
                        if (element.price > 15 && element.price < 30) {
                            return true
                        } else {
                            return false
                        }
                    }
                    )
                );
                break;
            case '30':
                setArrBooks(
                    book.books.filter((element) => {
                        if (element.price > 30) {
                            return true
                        } else {
                            return false
                        }
                    }
                    )
                );
                break;
            default:
                break;
        }
    }

    if (!localStorage.authorization) {
        document.querySelector('.navbar-toggler').classList.add('hidden');
        document.querySelector('.navbar-toggler').classList.remove('visible');
        document.location = '/'
    } else {
        return (
                <main>
                    <section>
                        <div className="book-search">
                            <input
                                onChange={(event) => filter(event)}
                                placeholder="Search by book name" />
                            <div className="form">
                                <div className='fieldset' >
                                    <select
                                        className='form__select'
                                        name="speed"
                                        onChange={(event) => checkValues(event)}
                                        id="speed">
                                        <option value="Price">Price</option>
                                        <option value='15'>less than 15$</option>
                                        <option value='15-30'>15 - 30$</option>
                                        <option value='30'>more than 30$</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="main">
                            <BookItem books={arrBooks}/>
                        </div>
                    </section>
                </main>
        )
    }

}

export default BooksList;
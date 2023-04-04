import React from "react";
import { Link } from "react-router-dom";
import notFound from '../../assets/imageNotFound.png';
import './bookItem.css';

const BookItem = function (props) {
    return (
        <div className="book-cards">
            {props.books.map((el) => {
                return (<div className="book-card" key={el.id}>
                    <img className="book-card__card-image" src={el.image !== "" ? el.image : notFound} alt={el.title} />
                    <div className="description">
                        <p className="book-name"><span>Book name:</span> {el.title.length < 24 ? el.title : el.title.substr(0, 24) + '...'}</p>
                        <p><span>Book autor:</span> {el.author}</p>
                    </div>
                    <div className="price">
                        <div>Prise, $ <span>{el.price}</span></div>
                        <Link className="book-button" to='/specific-book'>
                            <button
                                className="book-view"
                                onClick={() => { localStorage.setItem('viewBook', JSON.stringify(el)) }}
                                type="button">
                                View
                            </button>
                        </Link>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default BookItem;
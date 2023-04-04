import React from 'react';
import './specific-book.css';
import notFound from '../../assets/imageNotFound.png';
import Counter from '../counter/counter';

function SpecificBook() {
    const book = JSON.parse(localStorage.getItem('viewBook'))
    
    if (!localStorage.authorization) {
        document.location = 'prometheus-x-course-task'
    } else {
        return (
            <main>
                <section>
                    <div className="main-section">
                        <img src={book.image !== "" ? book.image : notFound} alt={book.title} />
                        <div className="book-description">
                            <p><span>Book name:</span> {book.title}</p>
                            <p><span>Book autor:</span> {book.author}</p>
                            <p><span>Book level:</span> </p>
                            <p><span>Book tags:</span> core</p>
                        </div>
                        <Counter book={book}/>
                    </div>
                    <p className="long-description"><span>Desciption:</span>{book.description}</p>
                </section>
            </main>
        )
    }
}

export default SpecificBook;

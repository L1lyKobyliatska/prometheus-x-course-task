import React, { useEffect, useState } from 'react';
import './login.css';
import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState(undefined);
    
    const singOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('authorization');
     },
     addToCart = () => {
        const raw = JSON.parse(localStorage.getItem('selectedBooks'));
        if (!raw) {
            document.location = '/purchase';
        } else if (raw.length === 0) {
            document.location = '/purchase';
        } else {
            document.location = '/fullCart';
        };
     }

    useEffect(() => {
        const raw = localStorage.getItem('username');
        setUsername(JSON.parse(raw));
    }, [])
    return (
        <div className="header__user-cart">
            <img
                src={cart}
                onClick={addToCart}
                alt="cart" />
            <Link className='sing-out' to="/">
                <button 
                className='sing-out__button'
                onClick={singOut}
                type="button">Sign-Out</button>
            </Link>
            <div className="user-photo"></div>
            <a href="/" className='user'>{username}</a>
        </div>
    )
}

export default Login;
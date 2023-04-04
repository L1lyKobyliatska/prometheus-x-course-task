import React, { useEffect, useState } from 'react';
import './singin.css';
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom';

export default function Signin() {
    const [username, setUsername] = useState(''),
        enterLogin = (event) => {
            setUsername(event.target.value);
        },
        addUser = () => {
            document.querySelector('.header__user-cart').classList.add('visible');
            document.querySelector('.header__user-cart').classList.remove('hidden');
            document.querySelector('.navbar-toggler').classList.add('visible');
            document.querySelector('.navbar-toggler').classList.remove('hidden');
            localStorage.authorization = true;
        };

    useEffect(() => {
        document.querySelector('.header__user-cart').classList.add('hidden');
        document.querySelector('.header__user-cart').classList.remove('visible');
        document.querySelector('.navbar-toggler').classList.add('hidden');
        document.querySelector('.navbar-toggler').classList.remove('visible');
        document.querySelector('.user').textContent = username;
    })

    useEffect(() => {
        if (username.length > 4 && username.length < 16) {
            document.querySelector('.sing-in').disabled = false;
            localStorage.setItem('username', JSON.stringify(username))
        } else {
            document.querySelector('.sing-in').disabled = true
        }
    }, [username]);

    if (localStorage.authorization) {
        document.location = 'books-list';
    } else {
        return (
            <main>
                <section>
                    <div className="section">
                        <img src={avatar} alt="avatar" />
                        <form action="/" method="post" autoComplete="on">
                            <div className="input-container">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    onChange={enterLogin}
                                    value={username}
                                    placeholder="type Username" />
                            </div>
                            <Link to='books-list'>
                                <button
                                    className='sing-in'
                                    onClick={addUser}
                                    type="submit">
                                    Sign-In
                                </button>
                            </Link>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

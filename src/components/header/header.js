import React from 'react';
import BurgerMenu from '../burger-menu/burger-menu';
import './header.css';


export default function Header() {

    return (
        <header>
        <hr/>
        <div className="header">
            <h1>X-course task / Liliia Kobyliatska</h1>
            <BurgerMenu/>
        </div>
        <hr/>
    </header>
    )
}


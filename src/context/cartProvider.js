import React from 'react';
export const Context = React.createContext();
export const CartProvider = (props) => {
    return (
        <Context.Provider value={props.value}>
            {props.children}
        </Context.Provider>
    )
};
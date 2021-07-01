import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const population= cart.reduce((pop,cart)=>pop+cart.population,0);
    return (
        <div>
            <h2>Country added: {cart.length}</h2>
            <h3>Total population: {population}</h3>
        </div>
    );
};

export default Cart;
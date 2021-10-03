import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // let total=0;
    // for(let i=0;i<cart.length;i++)
    // {
    //     total+=cart[i].population;
    // }
    let total=cart.reduce((total,el)=>total+el.population,0)
    return (
        <div>
           <h1>This cart: {cart.length}</h1> 
           <h4>Total population: {total}</h4>
        </div>
    );
};

export default  Cart;
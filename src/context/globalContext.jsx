import React, { useState } from 'react';
import storeContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const addProductToCart= (product) => {
        console.log("adding to cart", product);

        let copy = [...cart];
        copy.push(product);
        setCart(copy);
    };

    const removeProductFromCart= (id) => {
        console.log("removing from cart");

        let copy = cart.filter((p) => p._id !== id);
        setCart(copy);
        
    };

  return (
    <storeContext.Provider
      value={{
        cart: cart,
        user: user,

        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default GlobalContext;

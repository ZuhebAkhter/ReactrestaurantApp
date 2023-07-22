import React from 'react'
import CartContext from './Cart-context'

const CartProvider = (props) => {
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item});
    };
  
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id: id});
    };
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;
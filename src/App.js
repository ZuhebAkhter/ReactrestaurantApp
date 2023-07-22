import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartisShown,setCartisShown]=useState(false);
    
 const showCartHandler=()=>{
  setCartisShown(true)
 }
 const hideCartHandler=()=>{
  setCartisShown(false)
 }

  return (
    <CartProvider>
      {cartisShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    
  );
}

export default App;

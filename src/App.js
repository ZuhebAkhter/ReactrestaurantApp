import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";

function App() {
  const [cartisShown,setCartisShown]=useState(false);
    
 const showCartHandler=()=>{
  setCartisShown(true)
 }
 const hideCartHandler=()=>{
  setCartisShown(false)
 }

  return (
    <React.Fragment>
      {cartisShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
    
  );
}

export default App;

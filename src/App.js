import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";
import Counter from "./components/Counter";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(() => true);
  };
  const hideCart = () => {
    setCartIsShown(() => false);
  };
  return (
    <CartProvider>
      <Counter />
      {/* {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Hero />
      <main>
        <Meals />
      </main> */}
    </CartProvider>
  );
}
export default App;

import { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showcart, setShowcart] = useState(false);
  const showhandler = () => {
    setShowcart(true);
  };
  const hidehandler = () => {
    setShowcart(false);
  };
  return (
    <CartProvider>
      {showcart && <Cart onClose={hidehandler} />}
      <Header onShowCart={showhandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

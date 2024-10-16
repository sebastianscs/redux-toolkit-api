import { useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import ProductList from "../components/ProductsList";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <>
      <Header cartVisible={cartVisible} setCartVisible={toggleCartVisibility} />
      <ProductList />
      <Cart cartVisible={cartVisible}/>
    </>
  );
}

export default App;

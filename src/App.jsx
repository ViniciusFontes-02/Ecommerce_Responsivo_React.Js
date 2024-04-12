import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SidebarCart from "./components/SidebarCart";

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // trazendo produtos
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCartTotal = (value) => {
    setCartTotal(cartTotal + value);
  };

  // adicionar no carrinho
  const addProductToCart = (id) => {
    // esta filtrando se o id do produto escolhido é igual o id
    const productToAdd = products.filter((product) => product.id === id)[0];

    // se o produto ja estiver no carrinho -> return
    if (selectedProducts.includes(productToAdd)) return;

    // ira juntar o novo produto add com os ja selecionados
    setSelectedProducts(selectedProducts.concat(productToAdd));

    // somando total da compra
    setCartTotal(cartTotal + productToAdd.price);
  };

  // remover carrinho
  const removeProductToCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );

    setSelectedProducts(newSelectedProducts);
  };

  return (
    <Router>
      <div className="App">
        <NavBar setShowCart={setShowCart} selectedProducts={selectedProducts} />

        <SidebarCart
          addToCartTotal={addToCartTotal}
          removeProductToCart={removeProductToCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setShowCart={setShowCart}
          showCart={showCart}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  addToCartTotal={addToCartTotal}
                  removeProductToCart={removeProductToCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowCart={setShowCart}
                  showCart={showCart}
                  cartTotal={cartTotal}
                />
              }
            />

            <Route
              path="/products"
              element={
                <ProductsPage
                  products={products}
                  addProductToCart={addProductToCart}
                />
              }
            />

            <Route
              path="/cart/checkout"
              element={
                <div>
                  PAGINA DE PAGAMENTO: <p>Total: {cartTotal}</p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

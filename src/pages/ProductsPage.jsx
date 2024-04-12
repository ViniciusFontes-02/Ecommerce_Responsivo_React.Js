import React from "react";
import ProductsList from "../components/ProductsList";

export default function ProductsPage({ products, addProductToCart }) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Nossos produtos</h3>
        <div className="underline"></div>
      </div>

      <div className="main-content">
        <ProductsList products={products} addProductToCart={addProductToCart} />
      </div>
    </div>
  );
}

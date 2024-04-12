import React from "react";

import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import ExclusiveSection from "../components/ExclusiveSection";
import TestimonialsList from "../components/TestimonialsList";

export default function HomePage({ products, addProductToCart }) {
  return (
    <>
      <Header />

      <div className="page-inner-content">
        <div className="section-title">
          <h3>Produtos selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          <ProductsList
            addProductToCart={addProductToCart}
            products={products}
          />
        </div>
      </div>

      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}

import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

export default function SidebarCart({
  setShowCart,
  showCart,
  selectedProducts,
  cartTotal,
  removeProductToCart,
  addToCartTotal,
}) {
  return (
    <aside className={`sidebar-cart ${showCart && "show"}`}>
      <div className="top">
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="sidebar-products-list">
        {selectedProducts.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            removeProductToCart={removeProductToCart}
            addToCartTotal={addToCartTotal}
          />
        ))}
      </div>

      {cartTotal === 0 ? (
        <i>Seu carrinho está vazio</i>
      ) : (
        <>
          <div className="total-container">
            <b>Total:</b> R$ {cartTotal}
          </div>

          <Link to="/cart/checkout" className="btn-icon">
            <span>Pagar agora</span>
            <FontAwesomeIcon icon={faMoneyBill} />
          </Link>
        </>
      )}
    </aside>
  );
}

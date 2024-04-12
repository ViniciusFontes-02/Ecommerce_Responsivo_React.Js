// icones
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

// react router
import { Link } from "react-router-dom";

export default function NavBar({ setShowCart, selectedProducts }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          VINI<span>STORE</span>
        </h1>

        <nav className={`${show && "show"}`}>
          <ul>
            <li>{<Link to="/">Home</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/products">Produtos</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/about">Sobre</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/contact">Contatos</Link>}</li>
          </ul>

          <ul>
            <li>{<Link to="/account">Conta</Link>}</li>
          </ul>
        </nav>

        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar" />

            <FontAwesomeIcon icon={faSearch} />
          </div>

          <button className="shopping-cart" onClick={() => setShowCart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />

            <div className="products-count">{selectedProducts.length}</div>
          </button>

          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}

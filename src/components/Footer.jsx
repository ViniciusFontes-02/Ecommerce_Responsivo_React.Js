import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe nosso aplicativo</p>
          <p>Baixe nosso aplicativo pra Android e IOS</p>

          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            VINI<span>STORE</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            tenetur ab ducimus molestias odio amet ipsam, porro quod aspernatur.
            Optio atque distinctio quas quidem nihil quos voluptatem iure est
            explicabo.
          </p>
        </div>

        <div className="links">
          <h3>Links uteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>

            <li>
              <Link to="/">Blog posts</Link>
            </li>

            <li>
              <Link to="/">Politicas</Link>
            </li>

            <li>
              <Link to="/">Torne-se afiliados</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-inner-content">
        <hr />
        <p className="copyright">
          Copyright 2024 - Vinicius Fontes - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

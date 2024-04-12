// icones
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react router
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Dê um novo estilo ao seu trabalho!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos
            iste impedit, voluptatem culpa exercitationem ex veniam temporibus
            perspiciatis natus officia tempora nemo sit obcaecati labore laborum
            corrupti ipsum velit.
          </p>

          <Link to="/products" className="see-more-btn">
            <span>Ver agora!</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>

        <div className="right-side">
          <img src="/images/header-image.png" alt="Produtos" />
        </div>
      </div>
    </header>
  );
}

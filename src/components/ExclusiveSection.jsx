import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Smart Band 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              eligendi, id hic error nesciunt quisquam, pariatur eum labore
              asperiores officia perferendis iste minima ut fugiat ea
              repellendus ab. Vel, dolor.
            </p>

            <Link to="/products" className="see-more-btn">
              <span>Ver agora!</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          <div className="right-side">
            <img src="/images/exclusive.png" alt="Smart Band 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

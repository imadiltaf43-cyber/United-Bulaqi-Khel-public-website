import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

export default function SustainabilityCTA() {

  return (

    <section className="sustainability-cta">

      <div className="container">

        <span className="section-tag">

          RESPONSIBLE MINING

        </span>

        <h2>

          Building Pakistan's Future
          <br />
          Through Sustainable Mining

        </h2>

        <p>

          Sustainability is not just a commitment —
          it's the foundation of everything we do.

          Together we create value for our people,
          our communities and future generations.

        </p>

        <div className="cta-buttons">

          <Link
            to="/operations"
            className="primary-btn"
          >

            Explore Operations

            <FaArrowRight />

          </Link>

          <Link
            to="/contact"
            className="secondary-btn"
          >

            <FaPhoneAlt />

            Contact Us

          </Link>

        </div>

      </div>

    </section>

  );

}
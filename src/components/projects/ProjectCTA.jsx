import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./ProjectCTA.css";

export default function ProjectCTA() {
  return (
    <section className="project-cta">

      <div className="container">

        <div className="cta-content">

          <span className="cta-tag">
            Work With Us
          </span>

          <h2>
            Ready to Build the Future of Mining Together?
          </h2>

          <p>
            United Bulaqi Khel Enterprises is committed to sustainable mining,
            innovation, and strategic partnerships. Let's create long-term value
            together.
          </p>

          <Link
            to="/contact"
            className="cta-button"
          >
            Contact Us
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}
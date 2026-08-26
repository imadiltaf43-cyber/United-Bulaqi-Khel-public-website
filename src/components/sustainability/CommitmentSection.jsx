import { FaLeaf, FaRecycle, FaShieldAlt } from "react-icons/fa";

import commitmentImage from "../../assets/images/sustainability/commitment.jpg";

export default function CommitmentSection() {
  return (
    <section id="commitment" className="commitment-section">
      <div className="container commitment-grid">

        {/* Left Image */}

        <div className="commitment-image">
          <img
            src={commitmentImage}
            alt="Our Commitment"
          />
        </div>

        {/* Right Content */}

        <div className="commitment-content">

          <span className="section-tag">
            OUR COMMITMENT
          </span>

          <h2>
            Building A Sustainable Future
            <br />
            Through Responsible Mining
          </h2>

          <p>
            United Bulaqi Khel Enterprises believes that responsible
            mining creates long-term value for our environment,
            our people, and future generations.

            We continuously improve our mining practices through
            environmental protection, operational excellence,
            and community development.
          </p>

          <div className="commitment-features">

            <div className="feature-item">
              <FaLeaf />
              <span>Environmental Protection</span>
            </div>

            <div className="feature-item">
              <FaRecycle />
              <span>Responsible Resource Management</span>
            </div>

            <div className="feature-item">
              <FaShieldAlt />
              <span>Health & Safety First</span>
            </div>

          </div>

          <a
            href="#esg"
            className="primary-btn"
          >
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
}
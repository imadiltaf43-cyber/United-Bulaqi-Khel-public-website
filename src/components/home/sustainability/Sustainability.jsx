import {
  FaLeaf,
  FaSeedling,
  FaTint,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import sustainabilityImage from "../../../assets/images/home/sustainability.png";

import "./Sustainability.css";

export default function Sustainability() {
  return (
    <section className="sustainability-section">

      <div className="container">

        <div className="sustainability-card">

          {/* Left */}

          <div className="sustainability-content">

            <span className="section-subtitle">
              SUSTAINABILITY & SAFETY
            </span>

            <h2>
              Responsible Mining For
              <span> Future Generations</span>
            </h2>

            <p>
              We are committed to environmentally responsible
              mining practices while ensuring operational
              excellence, worker safety and community
              development across every project.
            </p>

            <div className="sustainability-list">

              <div className="list-item">
                <FaLeaf />
                <span>Land Rehabilitation</span>
              </div>

              <div className="list-item">
                <FaSeedling />
                <span>Dust & Emission Control</span>
              </div>

              <div className="list-item">
                <FaTint />
                <span>Water Conservation</span>
              </div>

              <div className="list-item">
                <FaShieldAlt />
                <span>Safe Working Environment</span>
              </div>

              <div className="list-item">
                <FaUsers />
                <span>Community Development</span>
              </div>

            </div>

            <button className="commitment-btn" >

              Our Commitment

              <FaArrowRight />

            </button>

          </div>

          {/* Right */}

          <div className="sustainability-image">

            <img
              src={sustainabilityImage}
              alt="Sustainability"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
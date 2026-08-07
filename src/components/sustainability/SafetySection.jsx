import {
  FaHardHat,
  FaShieldAlt,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";

import safetyImage from "../../assets/images/sustainability/safety.jpg";
import communityImage from "../../assets/images/sustainability/community.jpg";

export default function SafetySection() {
  return (
    <section className="safety-section">

      <div className="container">

        {/* ================= SAFETY ================= */}

        <div className="safety-row">

          <div className="safety-content">

            <span className="section-tag">
              SAFETY FIRST
            </span>

            <h2>

              Protecting Our People
              <br />
              Every Single Day

            </h2>

            <p>

              Safety is embedded into every stage of our mining
              operations. Through continuous training, strict
              operational procedures and modern equipment, we
              strive to maintain a Zero Harm workplace.

            </p>

            <div className="safety-features">

              <div className="feature">

                <FaHardHat />

                <span>PPE Compliance</span>

              </div>

              <div className="feature">

                <FaShieldAlt />

                <span>Risk Assessment</span>

              </div>

              <div className="feature">

                <FaHeartbeat />

                <span>Emergency Preparedness</span>

              </div>

            </div>

          </div>

          <div className="safety-image">

            <img
              src={safetyImage}
              alt="Mining Safety"
            />

          </div>

        </div>

        {/* ================= COMMUNITY ================= */}

        <div className="community-row">

          <div className="community-image">

            <img
              src={communityImage}
              alt="Community Development"
            />

          </div>

          <div className="community-content">

            <span className="section-tag">
              COMMUNITY DEVELOPMENT
            </span>

            <h2>

              Supporting Communities
              Beyond Mining

            </h2>

            <p>

              We believe sustainable mining creates lasting
              opportunities for local communities through
              employment, education, infrastructure, healthcare,
              and long-term partnerships.

            </p>

            <div className="community-features">

              <div className="feature">

                <FaHandsHelping />

                <span>Employment Opportunities</span>

              </div>

              <div className="feature">

                <FaHandsHelping />

                <span>Education Support</span>

              </div>

              <div className="feature">

                <FaHandsHelping />

                <span>Healthcare Initiatives</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
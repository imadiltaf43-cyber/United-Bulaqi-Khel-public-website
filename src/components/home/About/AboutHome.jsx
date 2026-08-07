import "./AboutHome.css";
import aboutImage from "../../../assets/images/about.png";
import { Link } from "react-router-dom";
import {
  FaCheckCircle
} from "react-icons/fa";

export default function AboutHome() {
  return (
    <section className="about-home">

      <div className="container">

        <div className="about-home-inner">

          <div className="about-home-left">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="United Bulaqi Khel Enterprises"
              />
            </div>
          </div>

          <div className="about-home-right">
            <span className="about-small-title">
              ABOUT US
            </span>

            <h2>
              United Bulaqi Khel Enterprises
            </h2>

            <p>
              With years of experience in the mining and minerals
              industry, we have built a strong reputation for
              delivering high-quality mineral products through
              responsible operations and modern technology.

              <br /><br />

              Our mission is to create value through sustainable
              mining practices, innovation and commitment to our
              stakeholders.
            </p>

            <div className="features">
              <div>
                <FaCheckCircle />
                Quality & Integrity
              </div>

              <div>
                <FaCheckCircle />
                Environmental Care
              </div>

              <div>
                <FaCheckCircle />
                Modern Machinery
              </div>

              <div>
                <FaCheckCircle />
                Client Satisfaction
              </div>
            </div>

            <Link to="/about" className="about-btn">
              Learn More About Us →
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
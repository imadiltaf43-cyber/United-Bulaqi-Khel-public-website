import "./Footer.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

import { getWebsiteSettings } from "../services/websiteSettingService";

export default function Footer() {

  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {

      const data = await getWebsiteSettings();

      setSettings(data.settings);

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* ================================= */}
          {/* COMPANY */}
          {/* ================================= */}

          <div className="footer-column company-column">

            <img
              src={logo}
              alt="UBKE"
              className="footer-logo"
            />

            <p className="footer-description">
              {settings?.footer?.companyDescription}
            </p>

            <div className="footer-social">

              {settings?.footer?.facebook && (

                <a
                  href={settings.footer.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>

              )}

              {settings?.footer?.linkedin && (

                <a
                  href={settings.footer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>

              )}

              {settings?.footer?.youtube && (

                <a
                  href={settings.footer.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>

              )}

            </div>

          </div>

          {/* ================================= */}
          {/* QUICK LINKS */}
          {/* ================================= */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul className="footer-links">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/administration">Administration</Link></li>

              <li><Link to="/minerals">Our Minerals</Link></li>

              <li><Link to="/operations">Operations</Link></li>

              <li><Link to="/projects">Projects</Link></li>

              <li><Link to="/sustainability">Sustainability</Link></li>

              <li><Link to="/employees">Employees</Link></li>

              <li><Link to="/investors">Investors</Link></li>

              <li><Link to="/careers">Careers</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* ================================= */}
          {/* SERVICES */}
          {/* ================================= */}

          <div className="footer-column">

            <h3>Our Services</h3>

            <ul className="footer-services">

              <li>Mining & Quarrying</li>

              <li>Crushing & Processing</li>

              <li>Mineral Trading</li>

              <li>Logistics & Supply</li>

              <li>Exploration Services</li>

            </ul>

          </div>

          {/* ================================= */}
          {/* CONTACT */}
          {/* ================================= */}

          <div className="footer-column">

            <h3>Contact Us</h3>

            <div className="contact-item">

              <FaMapMarkerAlt />

              <span>

                {settings?.footer?.address}

              </span>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <span>

                {settings?.footer?.phone}

              </span>

            </div>

            <div className="contact-item">

              <FaEnvelope />

              <span>

                {settings?.footer?.email}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        {settings?.footer?.copyright ||
          `© ${new Date().getFullYear()} United Bulaqi Khel Enterprises. All Rights Reserved.`}

      </div>

    </footer>

  );

}
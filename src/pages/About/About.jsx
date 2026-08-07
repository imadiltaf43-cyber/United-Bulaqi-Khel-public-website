import "./About.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Lightbulb,
  HardHat,
  Leaf,
  Award,
  Mountain,
  Users,
  Handshake,
} from "lucide-react";

import AnimatedCounter from "../../components/common/AnimatedCounter";
import { getWebsiteSettings } from "../../services/websiteSettingService";

import aboutBanner from "../../assets/images/about/about-banner.jpg";
import aboutCompany from "../../assets/images/about/about-company.jpg";

export default function About() {
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

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      text: "Operating with honesty, transparency, and responsibility.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "Using modern mining technologies for sustainable growth.",
    },
    {
      icon: HardHat,
      title: "Safety",
      text: "Ensuring the wellbeing of every worker and community.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      text: "Mining responsibly while protecting the environment.",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: settings?.aboutStats?.yearsExperience || 0,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Mountain,
      value: settings?.aboutStats?.miningSites || 0,
      suffix: "+",
      label: "Mining Sites",
    },
    {
      icon: Users,
      value: settings?.aboutStats?.skilledEmployees || 0,
      suffix: "+",
      label: "Skilled Employees",
    },
    {
      icon: Handshake,
      value: settings?.aboutStats?.happyClients || 0,
      suffix: "+",
      label: "Happy Clients",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        <div className="about-overlay"></div>

        <div className="container about-hero-content">
          <h1>ABOUT US</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <p>About Us</p>
          </div>
        </div>
      </section>

      {/* COMPANY */}

      <section className="company-section">

        <div className="container">

          <div className="company-grid">

            <div className="company-image">

              <img
                src={aboutCompany}
                alt=""
              />

            </div>

            <div className="company-content">

              <span className="section-tag">
                UNITED BULAQI KHEL ENTERPRISES
              </span>

              <h2>
                Building Pakistan Through Responsible Mining
              </h2>

              <p>
                United Bulaqi Khel Enterprises has built a strong reputation
                in Pakistan's mining industry by delivering premium-quality
                minerals with professionalism, integrity, and commitment to
                excellence.
              </p>

              <p>
                With decades of experience, modern equipment, and skilled
                professionals, we continue to contribute towards industrial
                growth while maintaining responsible mining practices and
                environmental sustainability.
              </p>

              <div className="mission-vision">

                <div>

                  <h4>Our Mission</h4>

                  <p>
                    Deliver high-quality minerals through safe, innovative,
                    and sustainable mining operations.
                  </p>

                </div>

                <div>

                  <h4>Our Vision</h4>

                  <p>
                    Become Pakistan's most trusted mining enterprise by
                    creating lasting value for our stakeholders.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="values-section">

        <div className="container">

          <div className="section-heading">

            <span>OUR VALUES</span>

            <h2>What Drives Us</h2>

          </div>

          <div className="values-grid">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="value-card"
                >
                  <Icon
                    size={42}
                    strokeWidth={1.7}
                  />

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="about-stats">

        <div className="container">

          <div className="stats-grid">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="about-stat"
                >
                  <Icon
                    size={36}
                    strokeWidth={1.8}
                  />

                  <h2>
                    <AnimatedCounter
                      end={item.value}
                      suffix={item.suffix || ""}
                    />
                  </h2>

                  <span>{item.label}</span>

                </div>
              );
            })}

          </div>

        </div>

      </section>
    </>
  );
}
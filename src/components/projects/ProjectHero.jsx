import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AnimatedCounter from "../common/AnimatedCounter";

import {
  FaIndustry,
  FaHardHat,
  FaTruckMoving,
  FaUsers,
} from "react-icons/fa";

import { getWebsiteSettings } from "../../services/websiteSettingService";

import heroImage from "../../assets/images/projects/project-hero.jpg";

import "./ProjectHero.css";

export default function ProjectHero() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getWebsiteSettings();
      setSettings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const stats = [
    {
      icon: <FaIndustry />,
      value: settings?.projectStats?.projectsCompleted || 0,
      label: "Projects Completed",
      suffix: "+",
      isString: false,
    },
    {
      icon: <FaHardHat />,
      value: settings?.projectStats?.activeProjects || 0,
      label: "Active Projects",
      suffix: "+",
      isString: false,
    },
    {
      icon: <FaTruckMoving />,
      value: settings?.projectStats?.annualOutput || "500K+",
      label: "Annual Output",
      isString: true,
    },
    {
      icon: <FaUsers />,
      value: settings?.projectStats?.commitment || "100%",
      label: "Commitment",
      isString: true,
    },
  ];

  return (
    <section
      className="project-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="project-hero-overlay"></div>

      <div className="container project-hero-container">

        {/* Left */}

        <div className="project-hero-left">

          <div className="hero-breadcrumb">

            <Link to="/">Home</Link>

            <span>/</span>

            <span>Projects</span>

          </div>

          <span className="hero-tag">
            OUR PROJECTS
          </span>

          <h1>

            Featured

            <span> Projects</span>

          </h1>

          <div className="hero-line"></div>

          <p>

            Explore our portfolio of successful mining
            operations, large-scale extraction projects,
            and sustainable developments that continue
            to power Pakistan's industrial growth.

          </p>

        </div>

        {/* Right */}

        <div className="project-hero-right">

          {stats.map((item, index) => (

            <div
              className="hero-stat"
              key={index}
            >

              <div className="hero-stat-icon">

                {item.icon}

              </div>

<h2>
  {item.isString ? (
    item.value
  ) : (
    <AnimatedCounter
    end={item.value}
    suffix={item.suffix || ""}
    isString={item.isString}
/>
  )}
</h2>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
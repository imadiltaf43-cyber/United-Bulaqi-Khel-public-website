import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaIndustry,
  FaMapMarkedAlt,
  FaUsers,
} from "react-icons/fa";
import "./CareerHero.css";

export default function CareerHero({
  stats = {
    jobs: 0,
    departments: 0,
    locations: 0,
    employees: 0,
  },
}) {
  return (
    <section className="career-hero">
      <div className="career-overlay"></div>

      <div className="container career-content">

        <div className="career-left">

          <span className="career-tag">
            Careers at United Bulaqi Khel Enterprises
          </span>

          <h1>
            Build Your Career With
            <span> United Bulaqi Khel Enterprises</span>
          </h1>

          <p>
            Become part of a team committed to excellence in mining,
            operational safety, environmental responsibility, and sustainable
            resource development.
          </p>

          <div className="career-buttons">

            <Link
              to="#jobs"
              className="career-btn primary"
            >
              Explore Opportunities
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="career-btn secondary"
            >
              Learn About UBKE
            </Link>

          </div>

        </div>

        <div className="career-stats-card">

          <div className="career-stat">
            <FaBriefcase />
            <div>
              <h3>{stats.jobs}</h3>
              <p>Open Positions</p>
            </div>
          </div>

          <div className="career-stat">
            <FaIndustry />
            <div>
              <h3>{stats.departments}</h3>
              <p>Departments</p>
            </div>
          </div>

          <div className="career-stat">
            <FaMapMarkedAlt />
            <div>
              <h3>{stats.locations}</h3>
              <p>Project Sites</p>
            </div>
          </div>

          <div className="career-stat">
            <FaUsers />
            <div>
              <h3>{stats.employees}</h3>
              <p>Professional Team</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
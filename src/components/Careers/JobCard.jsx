import React from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

import "./JobCard.css";

export default function JobCard({ job }) {
  const deadlineDate = job?.deadline ? new Date(job.deadline) : null;
  const remainingDays = deadlineDate
    ? Math.max(
        0,
        Math.ceil(
          (deadlineDate - new Date()) / (1000 * 60 * 60 * 24)
        )
      )
    : null;

  return (
    <div className="job-card">

      {/* Image */}

      <div className="job-card-image">

        <img
          src={job.jobImage}
          alt={job.title}
        />

        {job.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

      </div>

      {/* Content */}

      <div className="job-card-body">

        <div className="job-department">
          {job.department}
        </div>

        <h3>{job.title}</h3>

        <div className="job-info">

          <span>
            <FaMapMarkerAlt />
            {job.location}
          </span>

          <span>
            <FaBriefcase />
            {job.employmentType}
          </span>

          <span>
            <FaGraduationCap />
            {job.education}
          </span>

          <span>
            <FaClock />
            {job.experience}
          </span>

          <span>
            <FaUsers />
            {job.vacancies} Vacancy
            {job.vacancies > 1 ? "ies" : ""}
          </span>

          <span>
            <FaMoneyBillWave />
            {job.salary || "Negotiable"}
          </span>

        </div>

        <div className="job-footer">

          <div>

            <small>Application Deadline</small>

            <h5>
              {job.deadline
                ? new Date(job.deadline).toLocaleDateString()
                : "TBA"}
            </h5>

          </div>

          <div className="remaining-days">
            {remainingDays !== null
              ? `${remainingDays} Days Left`
              : "No deadline"}
          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="job-actions">

        <Link
          to={`/careers/${job._id}`}
          className="details-btn"
        >
          View Details
        </Link>

        <Link
          to={`/careers/apply/${job._id}`}
          className="apply-btn"
        >
          Apply Now
          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
}
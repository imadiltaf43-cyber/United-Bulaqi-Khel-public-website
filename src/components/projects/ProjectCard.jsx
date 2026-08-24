import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaIndustry,
  FaChartArea,
  FaArrowRight,
} from "react-icons/fa";

import "./ProjectCard.css";

export default function ProjectCard({ project }) {

  const imageUrl =
    project.gallery?.length > 0
      ? project.gallery[0].url
      : "/project.png";

  const rawStatus = project.status || "";
  const normalized = rawStatus.toLowerCase().trim();
  let displayStatus = rawStatus;
  if (
    normalized === "completed" ||
    normalized === "project completed" ||
    normalized.includes("complete")
  ) {
    displayStatus = "Stopped";
  } else if (normalized === "active" || normalized === "ongoing") {
    displayStatus = "Ongoing";
  }
  const statusClass = displayStatus.toLowerCase();

  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={imageUrl}
          alt={project.projectName}
          onError={(e) => {
            e.target.src = "/project.png";
          }}
        />

        {project.status === "Active" && (
          <span className="featured-badge">
            FEATURED
          </span>
        )}

      </div>

      <div className="project-content">

        <h3>{project.projectName}</h3>

        <p className="location">
          <FaMapMarkerAlt />
          {project.location}
        </p>

        <p className="description">
          {project.description?.length > 100
            ? project.description.substring(0, 100) + "..."
            : project.description}
        </p>

        <div className="project-info">

          <div>

            <FaIndustry />

            <span>Annual Output</span>

            <strong>{project.annualOutput}</strong>

          </div>

          <div>

            <FaChartArea />

            <span>Project Type</span>

            <strong>{project.projectType}</strong>

          </div>

          <div>

            <FaIndustry />

            <span>Status</span>

            <strong className={`status ${statusClass}`}>
              {displayStatus}
            </strong>

          </div>

        </div>

        <Link
          to={`/projects/${project._id}`}
          className="project-btn"
        >
          View Details
          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
}
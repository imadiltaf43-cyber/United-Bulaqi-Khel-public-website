import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./MineralCard.css";

export default function MineralCard({ mineral }) {
  return (
    <div className="mineral-card">

      <div className="mineral-image">

        <img
          src={mineral.coverImage}
          alt={mineral.name}
        />

        <span className="mineral-category">
          {mineral.category}
        </span>

      </div>

      <div className="mineral-body">

        <h3>{mineral.name}</h3>

        <p>
          {mineral.shortDescription}
        </p>

        <div className="mineral-location">

          <FaMapMarkerAlt />

          {mineral.location}

        </div>

        <Link
          to={`/minerals/${mineral._id}`}
          className="details-btn"
        >
          View Details

          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
}
import { FaUsers, FaArrowRight } from "react-icons/fa";
import "./VillageCard.css";

export default function VillageCard({
  village,
  totalShares,
  image,
  onSelect,
}) {
  return (
    <div className="village-card">
      <div className="village-image">
        <img src={image} alt={village} />
      </div>

      <div className="village-content">
        <h3>{village}</h3>

        <div className="village-population">
          <FaUsers />
          <span>Total shares: {totalShares}</span>
        </div>

        <button
          className="village-btn"
          onClick={() => onSelect(village)}
        >
          View Shareholders
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
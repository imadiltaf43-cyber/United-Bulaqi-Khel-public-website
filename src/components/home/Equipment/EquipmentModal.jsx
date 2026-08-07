import { useEffect } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

import "./Equipment.css";

export default function EquipmentModal({
  equipment,
  onClose,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!equipment) return null;

  return (
    <div
      className="equipment-modal-overlay"
      onClick={onClose}
    >
      <div
        className="equipment-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="equipment-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="equipment-modal-image">

          <img
            src={equipment.image}
            alt={equipment.name}
          />

        </div>

        <div className="equipment-modal-content">

          <span className="equipment-tag">

            Mining Equipment

          </span>

          <h2>{equipment.name}</h2>

          <p>{equipment.description}</p>

          <h4>Applications</h4>

          <ul>

            {equipment.applications.map((item, index) => (

              <li key={index}>

                <FaCheckCircle />

                {item}

              </li>

            ))}

          </ul>

        </div>
      </div>
    </div>
  );
}
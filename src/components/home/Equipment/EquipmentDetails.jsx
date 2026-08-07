import "./Equipment.css";

export default function EquipmentCard({
  equipment,
  active,
  onClick,
}) {
  return (
    <div
      className={`equipment-card ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      <div className="equipment-image">

        <img
          src={equipment.image}
          alt={equipment.name}
        />

      </div>

      <div className="equipment-name">

        {equipment.name}

      </div>

    </div>
  );
}
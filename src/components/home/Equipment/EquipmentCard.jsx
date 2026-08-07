import "./Equipment.css";

export default function EquipmentCard({
  equipment,
  onClick,
}) {
  return (
    <div
      className="equipment-card"
      onClick={onClick}
    >
      <div className="equipment-image">

        <img
          src={equipment.image}
          alt={equipment.name}
        />

      </div>

      <div className="equipment-card-footer">

        <h4>{equipment.name}</h4>

      </div>

    </div>
  );
}
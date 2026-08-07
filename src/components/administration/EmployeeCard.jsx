import "./EmployeeCard.css";

export default function EmployeeCard({ employee }) {
  // Build image URL
 const image = employee.profileImage
  ? employee.profileImage
  : "/images/avatar-placeholder.png";
  return (
    <div className="employee-card">

      <div className="employee-image">

        <img
          src={image}
          alt={employee.fullName}
        />

      </div>

      <div className="employee-content">

        <h3>
          {employee.fullName}
        </h3>

        <h5>
          {employee.designation}
        </h5>

        {
          employee.email && (
            <p>
              {employee.email}
            </p>
          )
        }

      </div>

    </div>
  );
}
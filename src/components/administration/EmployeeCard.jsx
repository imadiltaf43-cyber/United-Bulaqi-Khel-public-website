import "./EmployeeCard.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function EmployeeCard({ employee }) {
  if (!employee) return null;

  const image = employee.profileImage
    ? employee.profileImage.startsWith("http")
      ? employee.profileImage
      : `${API_BASE_URL}/${employee.profileImage.replace(/^\/+/, "")}`
    : "/images/avatar-placeholder.png";

  return (
    <article className="employee-card">
      <div className="employee-image">
        <img
          src={image}
          alt={employee.fullName || "Employee"}
          onError={(e) => {
            e.currentTarget.src = "/images/avatar-placeholder.png";
          }}
        />
      </div>

      <div className="employee-content">
        <h3>{employee.fullName}</h3>

        {employee.designation && (
          <h5>{employee.designation}</h5>
        )}

        {employee.department && (
          <span className="employee-department">
            {employee.department}
          </span>
        )}

        {employee.office && (
          <p className="employee-office">
            {employee.office}
          </p>
        )}
      </div>
    </article>
  );
}
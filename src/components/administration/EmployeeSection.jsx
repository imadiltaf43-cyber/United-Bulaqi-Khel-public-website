import EmployeeCard from "./EmployeeCard";
import "./EmployeeSection.css";

export default function EmployeeSection({
  title,
  employees,
}) {

  if (!employees || employees.length === 0) {
    return null;
  }

  return (

    <section className="employee-section">

      <div className="container">

        <div className="employee-section-title">

          <h2>{title}</h2>

        </div>

        <div className="row g-4">

          {

            employees.map((employee) => (

              <div
                className="col-lg-3 col-md-6"
                key={employee._id}
              >

                <EmployeeCard
                  employee={employee}
                />

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}
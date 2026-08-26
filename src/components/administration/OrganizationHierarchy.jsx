import "./OrganizationHierarchy.css";

const departmentColors = [
  "gold",
  "green",
  "red",
  "teal",
  "purple",
  "violet",
];

export default function OrganizationHierarchy({
  employees = [],
  office,
  title,
  variant = "hierarchy",
}) {
  if (!employees || employees.length === 0) return null;

  // =====================================================
  // OFFICE TABLE
  // =====================================================

  if (variant === "office-table") {
    return (
      <section className="organization-hierarchy office-table-section">
        <div className="container">
          <div className="office-title-wrap">
            <span className="section-eyebrow">OUR ORGANIZATION</span>

            <h2>{title || "Organization Structure"}</h2>

            <p>
              {office === "Darra"
                ? "Key Personnel"
                : "Organizational Structure & Key Personnel"}
            </p>
          </div>

          <div className="office-table-wrapper">
            <table className="office-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Name</th>
                  <th>Reporting</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.designation}</td>

                    <td className="name-cell">
                      {employee.fullName}
                    </td>

                    <td>
                      {employee.reportsTo
                        ? employee.reportsTo.fullName || "Management"
                        : "Management"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // HELPERS
  // =====================================================

  const designation = (employee) =>
    (employee.designation || "").toLowerCase();

  const directors = employees.filter((employee) => {
    const d = designation(employee);

    return (
      d.includes("director") ||
      d.includes("chairman")
    );
  });

  const managingDirector = employees.find((employee) => {
    const d = designation(employee);

    return (
      d.includes("managing director") ||
      d === "md" ||
      d.includes(" md")
    );
  });

  const generalManager = employees.find((employee) => {
    const d = designation(employee);

    return (
      d.includes("general manager") ||
      d === "gm" ||
      d.includes(" gm")
    );
  });

  // =====================================================
  // DEPARTMENT MANAGERS
  // =====================================================

  const managers = employees.filter((employee) => {
    const d = designation(employee);

    const isDirector =
      d.includes("director") ||
      d.includes("chairman");

    const isMD =
      managingDirector &&
      employee._id === managingDirector._id;

    const isGM =
      generalManager &&
      employee._id === generalManager._id;

    return (
      d.includes("manager") &&
      !isDirector &&
      !isMD &&
      !isGM
    );
  });

  const departmentMap = {};

  managers.forEach((manager) => {
    const department = manager.department || "Other";

    if (!departmentMap[department]) {
      departmentMap[department] = [];
    }

    departmentMap[department].push(manager);
  });

  // =====================================================
  // OTHER EMPLOYEES
  // =====================================================

  const remainingEmployees = employees.filter((employee) => {
    const isDirector = directors.some(
      (director) => director._id === employee._id
    );

    const isMD =
      managingDirector &&
      managingDirector._id === employee._id;

    const isGM =
      generalManager &&
      generalManager._id === employee._id;

    const isManager = managers.some(
      (manager) => manager._id === employee._id
    );

    return (
      !isDirector &&
      !isMD &&
      !isGM &&
      !isManager
    );
  });

  // =====================================================
  // IMAGE
  // =====================================================

  const getImage = (employee) => {
    if (employee?.profileImage) {
      return employee.profileImage;
    }

    return "/images/avatar-placeholder.png";
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <section className="organization-hierarchy hierarchy-layout">

      <div className="container">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="organization-heading">

          <span className="section-eyebrow">
            {office || "UNITED BULAQI KHEL"}
          </span>

          <h2>
            {title || "Leadership & Organization"}
          </h2>

          <div className="heading-line"></div>

        </div>


        {/* ============================================
            BOARD OF DIRECTORS
        ============================================ */}

        {directors.length > 0 && (
          <div className="board-section">

            <div className="board-label">
              <span></span>
              <strong>BOARD OF DIRECTORS</strong>
              <span></span>
            </div>

            <div className="directors-row">

              {directors.map((director) => (
                <div
                  className="director-card"
                  key={director._id}
                >

                  <div className="director-avatar">
                    <img
                      src={getImage(director)}
                      alt={director.fullName}
                    />
                  </div>

                  <div>
                    <h4>{director.fullName}</h4>
                    <p>{director.designation}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}


        {/* ============================================
            MANAGING DIRECTOR + MESSAGE
        ============================================ */}

        {managingDirector && (
          <div className="md-section">

            <div className="leadership-label">
              <span className="gold-line"></span>
              <span>EXECUTIVE LEADERSHIP</span>
            </div>

            <div className="md-profile-card">

              {/* MD PROFILE */}

              <div className="md-profile">

                <div className="md-image-wrapper">

                  <img
                    src={getImage(managingDirector)}
                    alt={managingDirector.fullName}
                  />

                </div>

                <div className="md-profile-info">

                  <span className="role-label">
                    MANAGING DIRECTOR
                  </span>

                  <h3>
                    {managingDirector.fullName}
                  </h3>

                  <p className="md-designation">
                    {managingDirector.designation}
                  </p>

                </div>

              </div>


              {/* MESSAGE */}

              {managingDirector.message && (
                <div className="md-message">

                  <div className="message-header">

                    <span className="quote-mark">
                      “
                    </span>

                    <div>
                      <span className="role-label">
                        MESSAGE FROM MD
                      </span>

                      <h4>
                        Leadership with Purpose
                      </h4>
                    </div>

                  </div>

                  <p>
                    {managingDirector.message}
                  </p>

                </div>
              )}

            </div>

          </div>
        )}


        {/* ============================================
            GENERAL MANAGER
        ============================================ */}

        {generalManager && (
          <div className="gm-section">

            <div className="leadership-label centered">
              <span className="gold-line"></span>
              <span>GENERAL MANAGEMENT</span>
              <span className="gold-line"></span>
            </div>

            <div className="gm-card">

              <div className="gm-image-wrapper">

                <img
                  src={getImage(generalManager)}
                  alt={generalManager.fullName}
                />

              </div>

              <div className="gm-info">

                <span className="role-label">
                  GENERAL MANAGER
                </span>

                <h3>
                  {generalManager.fullName}
                </h3>

                <p>
                  {generalManager.designation}
                </p>

                {generalManager.department && (
                  <span className="gm-department">
                    {generalManager.department}
                  </span>
                )}

              </div>

            </div>

          </div>
        )}


        {/* ============================================
            DEPARTMENTS
        ============================================ */}

        {Object.keys(departmentMap).length > 0 && (
          <div className="departments-section">

            <div className="leadership-label centered">

              <span className="gold-line"></span>

              <span>
                DEPARTMENTAL MANAGEMENT
              </span>

              <span className="gold-line"></span>

            </div>

            <div className="department-grid">

              {Object.entries(departmentMap).map(
                ([department, members], index) => {

                  const color =
                    departmentColors[
                      index % departmentColors.length
                    ];

                  return (
                    <div
                      className={`department-card ${color}`}
                      key={department}
                    >

                      <div className="department-card-header">

                        <div className="department-icon">
                          {department.charAt(0)}
                        </div>

                        <div>
                          <span>
                            DEPARTMENT
                          </span>

                          <h3>
                            {department}
                          </h3>
                        </div>

                      </div>


                      <div className="department-members">

                        {members.map((manager) => (
                          <div
                            className="department-member"
                            key={manager._id}
                          >

                            <img
                              src={getImage(manager)}
                              alt={manager.fullName}
                            />

                            <div>

                              <strong>
                                {manager.fullName}
                              </strong>

                              <span>
                                {manager.designation}
                              </span>

                            </div>

                          </div>
                        ))}

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>
        )}


        {/* ============================================
            OTHER STAFF
        ============================================ */}

        {remainingEmployees.length > 0 && (
          <div className="other-staff-section">

            <div className="leadership-label centered">

              <span className="gold-line"></span>

              <span>OUR TEAM</span>

              <span className="gold-line"></span>

            </div>

            <div className="other-staff-grid">

              {remainingEmployees.map((employee) => (
                <div
                  className="other-staff-card"
                  key={employee._id}
                >

                  <img
                    src={getImage(employee)}
                    alt={employee.fullName}
                  />

                  <div>
                    <strong>
                      {employee.fullName}
                    </strong>

                    <span>
                      {employee.designation}
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </section>
  );
}
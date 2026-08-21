import React from "react";
import "./OrganizationHierarchy.css";

export default function OrganizationHierarchy({ employees = [], office, title }) {
  if (!employees || employees.length === 0) return null;

  // helpers
  const findByDesignation = (keywords) =>
    employees.find((e) => {
      const d = (e.designation || "").toLowerCase();
      return keywords.some((k) => d.includes(k));
    });

  const filterByDesignation = (keywords) =>
    employees.filter((e) => {
      const d = (e.designation || "").toLowerCase();
      return keywords.some((k) => d.includes(k));
    });

  // top-level groups
  const directors = employees.filter((emp) => {
    const d = (emp.designation || "").toLowerCase();
    return d.includes("director") || d.includes("chairman");
  });

  const md = findByDesignation(["managing director", "managing dir", "md"]);

  const gm = findByDesignation(["general manager", "gm"]);

  // departmental managers (designation contains 'manager' but exclude directors/md/gm)
  const managers = employees.filter((emp) => {
    const d = (emp.designation || "").toLowerCase();
    return (
      d.includes("manager") &&
      !d.includes("director") &&
      !(md && emp._id === md._id) &&
      !(gm && emp._id === gm._id)
    );
  });

  // group managers by department
  const deptMap = {};
  managers.forEach((m) => {
    const dept = m.department || "Other";
    if (!deptMap[dept]) deptMap[dept] = [];
    deptMap[dept].push(m);
  });

  return (
    <section className="organization-hierarchy">
      <div className="container">
        <h2>{title || `${office} Office`}</h2>

        {/* Directors row */}
        {directors.length > 0 && (
          <div className="directors-row">
            {directors.map((d) => (
              <div className="director-card" key={d._id}>
                <div className="director-name">{d.fullName}</div>
                <div className="director-role">{d.designation}</div>
              </div>
            ))}
          </div>
        )}

        {/* MD + message + GM */}
        <div className="md-row">
          <div className="md-card">
            {md ? (
              <>
                <div className="md-name">{md.fullName}</div>
                <div className="md-role">{md.designation}</div>
              </>
            ) : (
              <div className="md-placeholder">Managing Director</div>
            )}
          </div>

          <div className="md-message">
            {md && md.message ? (
              <div>
                <h4>Message from MD</h4>
                <p>{md.message}</p>
              </div>
            ) : (
              <div className="md-message-empty">&nbsp;</div>
            )}
          </div>
        </div>

        {gm && (
          <div className="gm-row">
            <div className="gm-card">
              <div className="gm-name">{gm.fullName}</div>
              <div className="gm-role">{gm.designation}</div>
            </div>
          </div>
        )}

        {/* Departmental Teams */}
        <div className="departments-grid">
          {Object.keys(deptMap).map((dept) => (
            <div className="dept-box" key={dept}>
              <div className="dept-title">{dept} Managers</div>
              <ul>
                {deptMap[dept].map((m) => (
                  <li key={m._id}>{m.fullName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

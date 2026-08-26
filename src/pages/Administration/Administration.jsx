import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import OrganizationHierarchy from "../../components/administration/OrganizationHierarchy";

import { getEmployees } from "../../services/employeeService";

import "./Administration.css";

import heroBanner from "../../assets/images/administration/administration-hero.jpg";

export default function Administration() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const data = await getEmployees();

      setEmployees(data.employees || []);
    } catch (err) {
      console.error("Failed to load employees:", err);
    } finally {
      setLoading(false);
    }
  };

  /*
   * -----------------------------------------
   * GROUP EMPLOYEES BY OFFICE
   * -----------------------------------------
   */

  const headOfficeEmployees = employees.filter(
    (employee) =>
      (employee.office || "Head Office") === "Head Office"
  );

  const chitralEmployees = employees.filter(
    (employee) => employee.office === "Chitral"
  );

  const darraEmployees = employees.filter(
    (employee) => employee.office === "Darra"
  );

  /*
   * -----------------------------------------
   * RENDER
   * -----------------------------------------
   */

  return (
    <MainLayout>
      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="administration-hero"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="overlay"></div>

        <div className="container">
          <div className="hero-content">

            <div className="compact-hero-breadcrumb">
              <Link to="/">Home</Link>

              <span>/</span>

              <span>Administration</span>
            </div>

            <span className="compact-hero-tag">
              Our Leadership
            </span>

            <h1>
              Administration
            </h1>

            <div className="compact-hero-line"></div>

          </div>
        </div>
      </section>

      {/* =====================================
          LOADING
      ===================================== */}

      {loading ? (
        <div className="container py-5 text-center">
          <div className="spinner-border text-warning"></div>
        </div>
      ) : (
        <>
          {/* =================================
              HEAD OFFICE
          ================================= */}

          <OrganizationHierarchy
            title="UNITED BULAQI KHEL ENTERPRISES"
            office="Head Office"
            employees={headOfficeEmployees}
            variant="hierarchy"
          />

          {/* =================================
              CHITRAL OFFICE
          ================================= */}

          {chitralEmployees.length > 0 && (
            <OrganizationHierarchy
              title="UBKE DANIN CHITRAL"
              office="Chitral"
              employees={chitralEmployees}
              variant="office-table"
            />
          )}

          {/* =================================
              DARRA OFFICE
          ================================= */}

          {darraEmployees.length > 0 && (
            <OrganizationHierarchy
              title="UBKE MAIN OFFICE DARA ADAM KHEL"
              office="Darra"
              employees={darraEmployees}
              variant="office-table"
            />
          )}

          {/* =================================
              NO EMPLOYEES
          ================================= */}

          {employees.length === 0 && (
            <section className="container py-5 text-center">
              <h3>No administration information available.</h3>

              <p className="text-muted">
                Employee information will appear here once
                it has been added.
              </p>
            </section>
          )}
        </>
      )}
    </MainLayout>
  );
}
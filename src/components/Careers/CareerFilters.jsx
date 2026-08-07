import React from "react";
import {
  FaSearch,
} from "react-icons/fa";

import "./CareerFilter.css";

export default function CareerFilters({
  search,
  setSearch,
  department,
  setDepartment,
  employmentType,
  setEmploymentType,
  totalJobs = 0,
  departments = [],
}) {
  return (
    <section className="career-filters">

      <div className="career-filter-top">

        <div>
          <h2>Available Opportunities</h2>

          <p>
            Explore career opportunities across our mining operations and corporate departments.
          </p>
        </div>

        <div className="career-total-jobs">

          <span>{totalJobs}</span>

          <small>Open Positions</small>

        </div>

      </div>

      <div className="career-filter-box">

        {/* Search */}

        <div className="career-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Department */}

        <select
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >
          <option value="">
            All Departments
          </option>

          {departments.map((dept) => (
            <option
              key={dept}
              value={dept}
            >
              {dept}
            </option>
          ))}

        </select>

        {/* Employment */}

        <select
          value={employmentType}
          onChange={(e) =>
            setEmploymentType(e.target.value)
          }
        >

          <option value="">
            All Employment Types
          </option>

          <option value="Full Time">
            Full Time
          </option>

          <option value="Part Time">
            Part Time
          </option>

          <option value="Contract">
            Contract
          </option>

          <option value="Internship">
            Internship
          </option>

        </select>

      </div>

    </section>
  );
}
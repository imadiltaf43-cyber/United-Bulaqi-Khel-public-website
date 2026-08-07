import React from "react";
import JobCard from "./JobCard";
import "./JobList.css";

export default function JobList({
  jobs = [],
  loading = false,
}) {
  if (loading) {
    return (
      <section className="job-list">

        <div className="job-grid">

          {[1,2,3,4,5,6].map((item) => (

            <div
              key={item}
              className="job-skeleton"
            >

              <div className="skeleton-image"></div>

              <div className="skeleton-line large"></div>

              <div className="skeleton-line"></div>

              <div className="skeleton-line"></div>

              <div className="skeleton-button"></div>

            </div>

          ))}

        </div>

      </section>
    );
  }

  if (!loading && jobs.length === 0) {
    return (
      <section className="no-jobs">

        <h2>No Opportunities Available</h2>

        <p>
          There are currently no open positions.
          Please check back again soon.
        </p>

      </section>
    );
  }

  return (
    <section className="job-list">

      <div className="job-grid">

        {jobs.map((job) => (

          <JobCard
            key={job._id}
            job={job}
          />

        ))}

      </div>

    </section>
  );
}
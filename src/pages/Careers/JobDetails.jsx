import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaClock,
  FaUsers,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import {
  getJob,
} from "../../services/careerService";

import "./JobDetails.css";

export default function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadJob();

  }, [id]);

const loadJob = async () => {
  try {
    const response = await getJob(id);

    setJob(response.job);

  } catch (err) {
    console.error(err.response?.data || err);
  } finally {
    setLoading(false);
  }
};

  if (loading) {

    return (

      <div className="job-loading">

        Loading...

      </div>

    );

  }

  if (!job) {

    return (

      <div className="job-loading">

        Job not found.

      </div>

    );

  }

  return (

    <section className="job-details-page">

      <div className="job-banner">

        <img
        src={
            job.jobImage ||
            "/placeholder-job.jpg"
        }
         alt={job.title}
        />

        <div className="banner-overlay">

          <div className="container">

            <span>

              {job.department}

            </span>

            <h1>

              {job.title}

            </h1>

          </div>

        </div>

      </div>

      <div className="container">

        <div className="job-detail-grid">

          <div className="job-main">

            <h2>

              About this Position

            </h2>

            <p>

              {job.description}

            </p>

            <h3>

              Responsibilities

            </h3>

            <ul>

              {job.responsibilities?.map(
                (item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                )
              )}

            </ul>

            <h3>

              Requirements

            </h3>

            <ul>

              {job.requirements?.map(
                (item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                )
              )}

            </ul>

            <h3>

              Benefits

            </h3>

            <ul>

              {job.benefits?.map(
                (item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                )
              )}

            </ul>

          </div>

          <aside className="job-sidebar">

            <div className="job-info-box">

              <div>

                <FaMapMarkerAlt />

                <span>

                  {job.location}

                </span>

              </div>

              <div>

                <FaBriefcase />

                <span>

                  {job.employmentType}

                </span>

              </div>

              <div>

                <FaGraduationCap />

                <span>

                  {job.education}

                </span>

              </div>

              <div>

                <FaClock />

                <span>

                  {job.experience}

                </span>

              </div>

              <div>

                <FaUsers />

                <span>

                  {job.vacancies} Vacancies

                </span>

              </div>

              <div>

                <FaMoneyBillWave />

                <span>

                  {job.salary}

                </span>

              </div>

              <div>

                <FaCalendarAlt />

                <span>

                  {new Date(
                    job.deadline
                  ).toLocaleDateString()}

                </span>

              </div>

            </div>

            <Link

              to={`/careers/apply/${job._id}`}

              className="apply-job-btn"

            >

              Apply Now

              <FaArrowRight />

            </Link>

          </aside>

        </div>

      </div>

    </section>

  );

}
import React, {
  useEffect,
  useState,
} from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  FaCloudUploadAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  getJob,
  applyJob,
} from "../../services/careerService";

import "./ApplyJob.css";

export default function ApplyJob() {

  const { id } = useParams();

  console.log("Route ID:", id);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [job, setJob] = useState(null);

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    city: "",

    address: "",

    qualification: "",

    experience: "",

    coverLetter: "",

  });

  const [cv, setCv] = useState(null);

  useEffect(() => {
    if (!id) return;
    loadJob();
  }, [id]);

const loadJob = async (jobId) => {
  try {
    console.log("Loading job:", jobId);

    const response = await getJob(id);

    setJob(response.job);

  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (id) {
    loadJob(id);
  }
}, [id]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleCV = (e) => {

    setCv(e.target.files[0]);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!cv) {

      alert("Please upload your CV.");

      return;

    }

    try {

      setSubmitting(true);

      const data = new FormData();

      data.append("job", id);

      data.append("fullName", formData.fullName);

      data.append("email", formData.email);

      data.append("phone", formData.phone);

      data.append("city", formData.city);

      data.append("address", formData.address);

      data.append("qualification", formData.qualification);

      data.append("experience", formData.experience);

      data.append("coverLetter", formData.coverLetter);

      data.append("cv", cv);

      await applyJob(data);

      alert("Application submitted successfully.");

      navigate("/careers");

    }

    catch (err) {

      alert(

        err.response?.data?.message ||

        "Unable to submit application."

      );

    }

    finally {

      setSubmitting(false);

    }

};


if (loading) {

    return (

      <div className="career-loading">

        Loading...

      </div>

    );

}

if (!job) {

    return (

      <div className="career-loading">

        Job not found.

      </div>

    );

}

return (

<div className="apply-job-page">

    <div className="container">

        <div className="apply-grid">

            {/* LEFT */}

            <div className="job-summary">

                <img
                    src={job.jobImage}
                    alt={job.title}
                />

                <div className="summary-content">

                    <span>{job.department}</span>

                    <h2>{job.title}</h2>

                    <div className="summary-item">

                        <FaMapMarkerAlt />

                        {job.location}

                    </div>

                    <div className="summary-item">

                        <FaBriefcase />

                        {job.employmentType}

                    </div>

                    <div className="summary-item">

                        <FaMoneyBillWave />

                        {job.salary}

                    </div>

                    <hr />

                    <p>

                        Deadline

                    </p>

                    <strong>

                        {new Date(
                            job.deadline
                        ).toLocaleDateString()}

                    </strong>

                </div>

            </div>

            {/* RIGHT */}

            <form
                className="apply-form"
                onSubmit={handleSubmit}
            >

                <h2>

                    Apply for this Position

                </h2>

                <div className="row">

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="row">

                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />

                </div>

                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />

                <div className="row">

                    <input
                        type="text"
                        placeholder="Qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    />

                </div>

                <textarea

                    rows="7"

                    placeholder="Cover Letter"

                    name="coverLetter"

                    value={formData.coverLetter}

                    onChange={handleChange}

                />

                <label className="upload-box">

                    <FaCloudUploadAlt />

                    <span>

                        {cv
                            ? cv.name
                            : "Upload CV / Resume"}

                    </span>

                    <input

                        type="file"

                        hidden

                        accept=".pdf,.doc,.docx"

                        onChange={handleCV}

                    />

                </label>

                <button
                    type="submit"
                    disabled={submitting}
                >

                    {

                        submitting

                        ? "Submitting..."

                        : "Submit Application"

                    }

                </button>

            </form>

        </div>

    </div>

</div>

);


}
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import CareerHero from "../../components/Careers/CareerHero";
import CareerFilters from "../../components/Careers/CareerFilters";
import JobList from "../../components/Careers/JobList";

import {
  getJobs,
} from "../../services/careerService";

import "./Careers.css";

export default function Careers() {

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  const [employmentType, setEmploymentType] =
    useState("");

  const fetchJobs = async () => {

    try {

      setLoading(true);

      const response = await getJobs({
        active: true,
      });

      setJobs(response.jobs || []);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchJobs();

  }, []);

  const departments = useMemo(() => {

    return [
      ...new Set(
        jobs.map((job) => job.department)
      ),
    ];

}, [jobs]);

const locations = useMemo(() => {

    return [
      ...new Set(
        jobs.map((job) => job.location)
      ),
    ];

}, [jobs]);

const heroStats = {

    jobs: jobs.length,

    departments: departments.length,

    locations: locations.length,

    employees: 500,

};

const filteredJobs = jobs.filter((job) => {

    const matchesSearch =

      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      job.location
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      job.department
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesDepartment =

      department
        ? job.department === department
        : true;

    const matchesEmployment =

      employmentType
        ? job.employmentType ===
          employmentType
        : true;

    return (

      matchesSearch &&
      matchesDepartment &&
      matchesEmployment

    );

});

  return (
    <main className="careers-page">

      <CareerHero
        stats={heroStats}
      />

      <div className="container">

        <CareerFilters

          search={search}
          setSearch={setSearch}

          department={department}
          setDepartment={setDepartment}

          employmentType={employmentType}
          setEmploymentType={setEmploymentType}

          departments={departments}

          totalJobs={filteredJobs.length}

        />

        <JobList

          jobs={filteredJobs}

          loading={loading}

        />

      </div>

    </main>
  );

}
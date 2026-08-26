import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../../projects/ProjectCard";
import { getProjects } from "../../../services/projectService";

import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects((data.projects || []).slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="featured-projects-heading">
          <div>
            <span>OUR WORK</span>
            <h2>Featured Projects</h2>
          </div>

          <Link to="/projects" className="featured-projects-link">
            More Projects
          </Link>
        </div>

        <div className="featured-projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

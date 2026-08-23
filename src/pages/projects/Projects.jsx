import { useEffect, useMemo, useState } from "react";

import ProjectHero from "../../components/projects/ProjectHero";
import ProjectFilter from "../../components/projects/ProjectFilter";
import ProjectCard from "../../components/projects/ProjectCard";

import { getProjects } from "../../services/projectService";

import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sort, setSort] = useState("latest");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();

      setProjects(data.projects || []);
    } catch (err) {
      // silently fail — N-08
    } finally {
      setLoading(false);
    }
  };

  // Categories

  const categories = useMemo(() => {
    return [...new Set(projects.map((project) => project.category))];
  }, [projects]);

  // Filter + Sort

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }

    switch (sort) {
      case "az":
        list.sort((a, b) => a.projectName.localeCompare(b.projectName));

        break;

      case "za":
        list.sort((a, b) => b.projectName.localeCompare(a.projectName));

        break;

      default:
        list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return list;
  }, [projects, selectedCategory, sort]);

  return (
    <>
      <ProjectHero />

      <ProjectFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sort={sort}
        setSort={setSort}
      />

      <section className="projects-section">
        <div className="container">
          {loading ? (
            <div className="loading">Loading Projects...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="loading">No Projects Found</div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => {
                const coverImage =
                  project.gallery?.length > 0
                    ? project.gallery[0].url
                    : "/project.png";

                return (
                  <ProjectCard
                    key={project._id}
                    project={{
                      ...project,
                      coverImage,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}

      <section className="projects-cta">
        <div className="container">
          <h2>Interested In Our Mining Projects?</h2>

          <p>
            We welcome strategic partnerships and investment opportunities for
            sustainable mining operations across Pakistan.
          </p>

          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

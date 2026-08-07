import {
  FaThLarge,
  FaGem,
  FaMountain,
  FaIndustry,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./ProjectFilter.css";

export default function ProjectFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
}) {
  return (
    <section className="project-filter">

      <div className="container filter-container">

        <div className="filter-left">

          <button
            className={
              selectedCategory === "All"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedCategory("All")
            }
          >
            <FaThLarge />
            All Projects
          </button>

          {categories.map((cat) => {

            let Icon = FaGem;

            if (cat.toLowerCase().includes("marble"))
              Icon = FaMountain;

            else if (
              cat.toLowerCase().includes("chromite")
            )
              Icon = FaGem;

            else if (
              cat.toLowerCase().includes("copper")
            )
              Icon = FaIndustry;

            else if (
              cat.toLowerCase().includes("exploration")
            )
              Icon = FaMapMarkerAlt;

            return (
              <button
                key={cat}
                className={
                  selectedCategory === cat
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(cat)
                }
              >
                <Icon />
                {cat}
              </button>
            );
          })}

        </div>

        <div className="filter-right">

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="latest">
              Sort By : Latest
            </option>

            <option value="az">
              Name A-Z
            </option>

            <option value="za">
              Name Z-A
            </option>

          </select>

        </div>

      </div>

    </section>
  );
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGem } from "react-icons/fa";

import { getMinerals } from "../../../services/mineralService";

import "./MineralsSection.css";

export default function MineralsSection() {
  const [minerals, setMinerals] = useState([]);

  useEffect(() => {
    loadMinerals();
  }, []);

  const loadMinerals = async () => {
    try {
      const data = await getMinerals();

      // show only featured or first four
      const featured =
        data.filter((m) => m.featured).length > 0
          ? data.filter((m) => m.featured)
          : data.slice(0, 4);

      setMinerals(featured);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="homeMinerals">

      <div className="container">

        <div className="sectionHeading">

          <span></span>

          <h2>OUR MINERALS</h2>

          <span></span>

        </div>

        <div className="mineralsGrid">

          {minerals.map((mineral) => (

            <Link
              key={mineral._id}
              to={`/minerals/${mineral._id}`}
              className="mineralCard"
            >

              <img
                src={mineral.image}
                alt={mineral.name}
              />

              <div className="mineralContent">

                <div className="mineralTitle">

                  <FaGem />

                  <h3>{mineral.name}</h3>

                </div>

                <span>
                  View Details
                  <FaArrowRight />
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
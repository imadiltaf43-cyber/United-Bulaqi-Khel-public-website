import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMinerals } from "../../services/mineralService";

import heroBanner from "../../assets/images/minerals-banner.jpg";

import "./Minerals.css";

export default function Minerals() {
  const [minerals, setMinerals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMinerals();
  }, []);

  const loadMinerals = async () => {
    try {
      const data = await getMinerals();
      // C-02: Defensive check — API may return an array OR an object with a minerals key
      setMinerals(Array.isArray(data) ? data : data.minerals || []);
    } catch (err) {
      // N-08: removed console.error in production; silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      {/* Hero Section */}

      <section
        className="mineralsHero"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="heroOverlay"></div>

        <div className="container mineralsHeroContent">

          {/* N-04: Breadcrumb "Home" wrapped in a Link */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span> Our Minerals
          </div>

          <span className="compact-hero-tag">Natural Resources</span>

          <h1>OUR MINERALS</h1>

          <div className="compact-hero-line"></div>

        </div>

      </section>

      {/* Minerals */}

      <section className="mineralsPage">

        <div className="container">

          {loading ? (

            <div className="loading">
              Loading Minerals...
            </div>

          ) : (

            <div className="mineralsGrid">

              {minerals.map((mineral) => (

                <div
                  className="mineralCard"
                  key={mineral._id}
                >

                  <div className="mineralImage">

                    <img
                        src={mineral.image}
                        alt={mineral.name}
                        loading="lazy"
                    />

                  </div>

                  <div className="mineralContent">

                    <h3>{mineral.name}</h3>

                    <p>
                      {mineral.shortDescription}
                    </p>

                    <Link
                      to={`/minerals/${mineral._id}`}
                      className="detailsBtn"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </>
  );
}
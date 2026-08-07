import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

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
      setMinerals(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      {/* Hero Section */}

      <section
        className="mineralsHero"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="heroOverlay"></div>

        <div className="container mineralsHeroContent">

          <div className="breadcrumb">
            Home <span>›</span> Our Minerals
          </div>

          <h1>OUR MINERALS</h1>

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

    </MainLayout>
  );
}
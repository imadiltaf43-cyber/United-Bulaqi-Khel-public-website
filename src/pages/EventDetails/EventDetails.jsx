import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowLeft,
  FaLayerGroup,
  FaInfoCircle,
} from "react-icons/fa";

import { getEvent } from "../../services/eventService";

import "./EventDetails.css";

export default function EventDetails() {

  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---- Fetch event on mount ----

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const data = await getEvent(id);
      setEvent(data);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  // ---- Loading State ----

  if (loading) {
    return (
      <section className="event-details-page">
        <div className="container">
          <div className="event-details-loading">
            Loading event...
          </div>
        </div>
      </section>
    );
  }

  // ---- Not Found State ----

  if (!event) {
    return (
      <section className="event-details-page">
        <div className="container">
          <div className="event-details-empty">
            <h2>Event not found</h2>
            <Link to="/sustainability" className="event-details-back">
              <FaArrowLeft />
              Back to Sustainability
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ---- Render ----

  const heroImage =
    event.gallery?.length > 0
      ? event.gallery[0].url
      : event.thumbnail || null;

  const statusClass = {
    Completed: "ed-status-completed",
    Ongoing: "ed-status-ongoing",
    Planned: "ed-status-planned",
  }[event.status] || "";

  const categoryBadgeClass = {
    Plantation: "ed-badge-plantation",
    "Road Construction": "ed-badge-road",
    Infrastructure: "ed-badge-infra",
    "Clean Water": "ed-badge-water",
    Seminar: "ed-badge-seminar",
  }[event.category] || "ed-badge-other";

  return (

    <>

      {/* Hero Banner */}

      {heroImage && (

        <section
          className="event-details-hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >

          <div className="event-details-hero-overlay"></div>

          <div className="container event-details-hero-content">

            <div className="compact-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/sustainability">Sustainability</Link>
              <span>/</span>
              <span>Event Details</span>
            </div>

            <span className="compact-hero-tag">
              {event.category}
            </span>

            <h1>{event.title}</h1>

            <div className="compact-hero-line"></div>

          </div>

        </section>

      )}

      {/* Content */}

      <section className="event-details-content">

        <div className="container">

          {/* Back Link */}

          <Link to="/sustainability" className="event-details-back">
            <FaArrowLeft />
            Back to Sustainability
          </Link>

          {/* Info Row */}

          <div className="event-details-info-row">

            <div className="event-details-info-card">

              <div className="event-info-item">
                <FaLayerGroup />
                <div>
                  <small>Category</small>
                  <span className={`event-info-badge ${categoryBadgeClass}`}>
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="event-info-item">
                <FaCalendarAlt />
                <div>
                  <small>Date</small>
                  <strong>
                    {event.date
                      ? new Date(event.date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : "—"}
                  </strong>
                </div>
              </div>

              <div className="event-info-item">
                <FaMapMarkerAlt />
                <div>
                  <small>Location</small>
                  <strong>{event.location || "N/A"}</strong>
                </div>
              </div>

              <div className="event-info-item">
                <FaInfoCircle />
                <div>
                  <small>Status</small>
                  <span className={`event-info-status ${statusClass}`}>
                    {event.status}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Description */}

          <div className="event-details-description">

            <h2>About This Event</h2>

            <p>{event.description}</p>

          </div>

          {/* Gallery */}

          {event.gallery && event.gallery.length > 1 && (

            <div className="event-details-gallery">

              <h2>Gallery</h2>

              <div className="event-details-gallery-grid">

                {event.gallery.map((image, index) => (

                  <div className="event-gallery-item" key={index}>
                    <img
                      src={image.url}
                      alt={`${event.title} - ${index + 1}`}
                      loading="lazy"
                    />
                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </section>

    </>

  );

}

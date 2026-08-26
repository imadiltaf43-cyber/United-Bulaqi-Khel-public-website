import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import { getEvents } from "../../services/eventService";

// ============================
// Category filter tabs
// ============================

const CATEGORIES = [
  "All",
  "Plantation",
  "Road Construction",
  "Infrastructure",
  "Clean Water",
  "Seminar",
  "Other",
];

// ============================
// Category badge color helper
// ============================

const categoryBadgeClass = (cat) => {
  const map = {
    Plantation: "events-badge-plantation",
    "Road Construction": "events-badge-road",
    Infrastructure: "events-badge-infra",
    "Clean Water": "events-badge-water",
    Seminar: "events-badge-seminar",
  };
  return map[cat] || "events-badge-other";
};

// ============================
// Status pill class helper
// ============================

const statusClass = (status) => {
  const map = {
    Completed: "events-status-completed",
    Ongoing: "events-status-ongoing",
    Planned: "events-status-planned",
  };
  return map[status] || "";
};

// ============================
// EventsSection Component
// ============================

export default function EventsSection() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // ---- Fetch events on mount ----

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      // Defensive: API may return array or { events: [] }
      setEvents(Array.isArray(data) ? data : data.events || []);
    } catch {
      // Silently fail on public site
    } finally {
      setLoading(false);
    }
  };

  // ---- Filter by active category tab ----

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  // ---- Sort by date (newest first) ----

  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // ---- Render ----

  return (

    <section className="events-section" id="events">

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading">

          <span className="section-tag">
            COMMUNITY INITIATIVES
          </span>

          <h2>
            Our Sustainability Events
          </h2>

          <p>
            From plantation drives and road construction to clean
            drinking water projects and community seminars — see
            how we're building a better future for local communities.
          </p>

        </div>

        {/* Category Filter Tabs */}

        <div className="events-filter-tabs">

          {CATEGORIES.map((cat) => (

            <button
              key={cat}
              className={`events-filter-tab ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Loading State */}

        {loading && (

          <div className="events-loading">
            Loading events...
          </div>

        )}

        {/* Empty State */}

        {!loading && sortedEvents.length === 0 && (

          <div className="events-empty">
            <p>No events found in this category.</p>
          </div>

        )}

        {/* Events Grid */}

        {!loading && sortedEvents.length > 0 && (

          <div className="events-grid">

            {sortedEvents.map((event) => {

              const image =
                event.gallery?.length > 0
                  ? event.gallery[0].url
                  : event.thumbnail || null;

              return (

                <div className="event-card" key={event._id}>

                  {/* Card Image */}

                  {image && (

                    <div className="event-card-image">
                      <img
                        src={image}
                        alt={event.title}
                        loading="lazy"
                      />

                      {/* Status pill overlay */}
                      <span
                        className={`event-card-status ${statusClass(
                          event.status
                        )}`}
                      >
                        {event.status}
                      </span>

                    </div>

                  )}

                  {/* Card Body */}

                  <div className="event-card-body">

                    {/* Category Badge */}

                    <span
                      className={`event-card-badge ${categoryBadgeClass(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>

                    <h3>{event.title}</h3>

                    {/* Meta Row */}

                    <div className="event-card-meta">

                      {event.date && (
                        <span>
                          <FaCalendarAlt />
                          {new Date(event.date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      )}

                      {event.location && (
                        <span>
                          <FaMapMarkerAlt />
                          {event.location}
                        </span>
                      )}

                    </div>

                    {/* Description excerpt */}

                    <p className="event-card-excerpt">
                      {event.description?.length > 120
                        ? event.description.substring(0, 120) + "..."
                        : event.description}
                    </p>

                    {/* Details Link */}

                    <Link
                      to={`/sustainability/events/${event._id}`}
                      className="event-card-link"
                    >
                      View Details
                      <FaArrowRight />
                    </Link>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

    </section>

  );

}

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { getSustainabilityEvents } from "../../services/sustainabilityEventService";

export default function SustainabilityEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getSustainabilityEvents().then(setEvents).catch(() => setEvents([]));
  }, []);

  if (!events.length) return null;

  return <section className="sustainability-events">
    <div className="container">
      <div className="section-heading">
        <span className="section-tag">OUR EFFORTS</span>
        <h2>Our Efforts for a Sustainable Environment</h2>
        <p>Discover the community initiatives and environmental campaigns we are building together.</p>
      </div>
      <div className="sustainability-events-grid">
        {events.map((event) => <article className="sustainability-event-card" key={event._id}>
          {event.image && <img src={event.image} alt={event.title} />}
          <div className="sustainability-event-content">
            <span className="sustainability-event-type">{event.type}</span>
            <h3>{event.title}</h3>
            <div className="sustainability-event-meta"><span><FaCalendarAlt /> {new Date(event.date).toLocaleDateString()}</span>{event.location && <span><FaMapMarkerAlt /> {event.location}</span>}</div>
            <p>{event.shortDescription}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

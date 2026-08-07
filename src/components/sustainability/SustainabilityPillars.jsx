import {
  FaLeaf,
  FaRecycle,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

export default function SustainabilityPillars() {

  const pillars = [

    {
      icon: <FaLeaf />,
      title: "Environmental Protection",
      description:
        "We minimize environmental impact through responsible land management, emission control, and ecosystem preservation.",
    },

    {
      icon: <FaRecycle />,
      title: "Responsible Resource Management",
      description:
        "Modern mining techniques help us maximize mineral recovery while minimizing waste and conserving natural resources.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Health & Safety",
      description:
        "Safety is our highest priority. We maintain strict operational standards to ensure a safe workplace for every employee.",
    },

    {
      icon: <FaHandsHelping />,
      title: "Community Development",
      description:
        "We actively support surrounding communities through employment opportunities, education, and social initiatives.",
    },

  ];

  return (

    <section className="pillars-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">

            OUR SUSTAINABILITY PILLARS

          </span>

          <h2>

            Creating Long-Term Value
            <br />
            Through Responsible Mining

          </h2>

          <p>

            Sustainability is integrated into every stage of our mining
            operations, ensuring environmental stewardship, employee
            wellbeing, and community prosperity.

          </p>

        </div>

        <div className="pillars-grid">

          {

            pillars.map((pillar, index) => (

              <div
                className="pillar-card"
                key={index}
              >

                <div className="pillar-icon">

                  {pillar.icon}

                </div>

                <h3>

                  {pillar.title}

                </h3>

                <p>

                  {pillar.description}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}
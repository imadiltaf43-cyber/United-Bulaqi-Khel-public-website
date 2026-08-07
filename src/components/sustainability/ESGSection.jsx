import {
  FaLeaf,
  FaUsers,
  FaBalanceScale,
} from "react-icons/fa";

import rehabilitationImage from "../../assets/images/sustainability/rehabilitation.jpg";

export default function ESGSection() {

  const esg = [

    {
      icon: <FaLeaf />,
      title: "Environmental",
      description:
        "Reducing environmental impact through responsible land rehabilitation, resource conservation, and sustainable mining practices.",
    },

    {
      icon: <FaUsers />,
      title: "Social",
      description:
        "Creating employment opportunities, supporting local communities, and maintaining a safe and inclusive workplace.",
    },

    {
      icon: <FaBalanceScale />,
      title: "Governance",
      description:
        "Operating with transparency, accountability, ethical business practices, and compliance with mining regulations.",
    },

  ];

  return (

    <section
  id="esg"
  className="esg-section"
>

      <div className="container esg-grid">

        {/* Left */}

        <div className="esg-image">

          <img
            src={rehabilitationImage}
            alt="Environmental Responsibility"
          />

        </div>

        {/* Right */}

        <div className="esg-content">

          <span className="section-tag">

            ESG COMMITMENT

          </span>

          <h2>

            Responsible Mining Through
            Environmental, Social &
            Governance Excellence

          </h2>

          <p>

            Sustainability at United Bulaqi Khel Enterprises extends
            beyond mining operations. We strive to balance business
            growth with environmental responsibility, employee
            wellbeing, and strong corporate governance.

          </p>

          <div className="esg-cards">

            {

              esg.map((item, index) => (

                <div
                  className="esg-card"
                  key={index}
                >

                  <div className="esg-icon">

                    {item.icon}

                  </div>

                  <div>

                    <h3>

                      {item.title}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </section>

  );

}
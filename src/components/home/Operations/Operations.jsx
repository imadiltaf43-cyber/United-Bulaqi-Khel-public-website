import {
  FaBinoculars,
  FaClipboardCheck,
  FaHardHat,
  FaIndustry,
  FaShieldAlt,
  FaTruck,
  FaChevronRight,
} from "react-icons/fa";

import "./Operations.css";

const operations = [
  {
    id: 1,
    title: "Exploration",
    icon: FaBinoculars,
  },
  {
    id: 2,
    title: "Survey & Analysis",
    icon: FaClipboardCheck,
  },
  {
    id: 3,
    title: "Extraction",
    icon: FaHardHat,
  },
  {
    id: 4,
    title: "Crushing & Processing",
    icon: FaIndustry,
  },
  {
    id: 5,
    title: "Quality Control",
    icon: FaShieldAlt,
  },
  {
    id: 6,
    title: "Packing & Delivery",
    icon: FaTruck,
  },
];

export default function Operations() {
  return (
    <section className="operations-section">

      <div className="container">

        {/* Section Heading */}

        <div className="operations-heading">

          <span className="heading-line"></span>

          <h2>OUR OPERATIONS</h2>

          <span className="heading-line"></span>

        </div>

        {/* Timeline */}

        <div className="operations-wrapper">

          {operations.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                className="operation-item"
                key={item.id}
              >

                <div className="operation-icon">

                  <Icon />

                </div>

                <h4>{item.title}</h4>

                {index !== operations.length - 1 && (

                  <div className="operation-arrow">

                    <FaChevronRight />

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
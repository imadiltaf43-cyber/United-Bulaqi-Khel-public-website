import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import EquipmentCard from "./EquipmentCard";
import EquipmentModal from "./EquipmentModal";

import "./Equipment.css";

import excavator from "../../../assets/images/equipment/excavator.jpg";
import truck from "../../../assets/images/equipment/dumptruck.jpg";
import loader from "../../../assets/images/equipment/loader.jpg";
import drill from "../../../assets/images/equipment/drilling.jpg";
import crusher from "../../../assets/images/equipment/crusher.jpg";

const equipments = [
  {
    id: 1,
    name: "Excavators",
    image: excavator,
    description:
      "Excavators are essential heavy-duty machines used for excavation, overburden removal, trenching and material handling in mining operations. Their powerful hydraulic systems ensure efficient digging even in demanding environments.",

    applications: [
      "Surface Excavation",
      "Material Loading",
      "Site Preparation",
      "Rock & Soil Removal",
    ],
  },

  {
    id: 2,
    name: "Dump Trucks",
    image: truck,
    description:
      "Dump trucks transport extracted minerals and waste materials safely throughout mining sites. They are designed for high-capacity hauling under harsh operating conditions.",

    applications: [
      "Ore Transportation",
      "Material Hauling",
      "Waste Removal",
      "Mine Logistics",
    ],
  },

  {
    id: 3,
    name: "Wheel Loaders",
    image: loader,
    description:
      "Wheel loaders efficiently move, load and transfer materials across mining operations. Their versatility makes them indispensable for daily production activities.",

    applications: [
      "Loading Operations",
      "Material Transfer",
      "Stockpile Handling",
      "Site Maintenance",
    ],
  },

  {
    id: 4,
    name: "Drilling Machines",
    image: drill,
    description:
      "Drilling equipment creates accurate boreholes for exploration and blasting preparation. They play an important role in mine planning and resource extraction.",

    applications: [
      "Exploration",
      "Blast Hole Drilling",
      "Geological Survey",
      "Mine Development",
    ],
  },

  {
    id: 5,
    name: "Crushers & Screens",
    image: crusher,
    description:
      "Crushing and screening systems process mined materials into usable sizes for transportation and industrial applications while maintaining product quality.",

    applications: [
      "Material Crushing",
      "Screening",
      "Aggregate Processing",
      "Quality Control",
    ],
  },
];

export default function Equipment() {

  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (

    <section className="equipment-section">

      <div className="container">

        <div className="equipment-heading">

          <span className="heading-line"></span>

          <h2>OUR EQUIPMENT</h2>

          <span className="heading-line"></span>

        </div>

        <div className="equipment-slider">

          <button className="slider-btn">

            <FaChevronLeft />

          </button>

          <div className="equipment-cards">

            {equipments.map((item) => (

              <EquipmentCard
                key={item.id}
                equipment={item}
                onClick={() => setSelectedEquipment(item)}
              />

            ))}

          </div>

          <button className="slider-btn">

            <FaChevronRight />

          </button>

        </div>

      </div>

      {selectedEquipment && (

        <EquipmentModal
          equipment={selectedEquipment}
          onClose={() => setSelectedEquipment(null)}
        />

      )}

    </section>

  );
}
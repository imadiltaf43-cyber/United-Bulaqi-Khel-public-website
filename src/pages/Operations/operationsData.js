import exploration from "../../assets/images/operations/exploration.jpg";
import survey from "../../assets/images/operations/survey.jpg";
import extraction from "../../assets/images/operations/extraction.jpg";
import crushing from "../../assets/images/operations/crushing.jpg";
import quality from "../../assets/images/operations/quality.jpg";
import packing from "../../assets/images/operations/packing.jpg";

const operationsData = [

  {
    id: 1,
    title: "Exploration",

    image: exploration,

    description:
      "Our exploration team uses advanced geological surveys and modern technologies to identify high-quality mineral reserves while ensuring minimal environmental impact.",

    points: [
      "Advanced Geological Surveys",
      "Core Drilling & Sampling",
      "Mineral Resource Estimation",
    ],
  },

  {
    id: 2,
    title: "Survey & Analysis",

    image: survey,

    description:
      "Detailed surveys and laboratory analysis are carried out to evaluate mineral composition, reserve quality, and long-term mining feasibility.",

    points: [
      "Land & Topographic Survey",
      "Laboratory Mineral Analysis",
      "Reserve Evaluation",
    ],
  },

  {
    id: 3,
    title: "Extraction",

    image: extraction,

    description:
      "Our extraction process utilizes modern heavy equipment and internationally accepted mining practices to maximize productivity and worker safety.",

    points: [
      "Controlled Excavation",
      "Safe Mining Practices",
      "Efficient Resource Recovery",
    ],
  },

  {
    id: 4,
    title: "Crushing & Processing",

    image: crushing,

    description:
      "Extracted minerals are processed through modern crushing plants to achieve consistent sizing and superior product quality.",

    points: [
      "Primary Crushing",
      "Material Screening",
      "Quality Processing",
    ],
  },

  {
    id: 5,
    title: "Quality Control",

    image: quality,

    description:
      "Strict quality control procedures are followed at every production stage to ensure that every shipment meets customer specifications.",

    points: [
      "Continuous Inspection",
      "Laboratory Testing",
      "International Standards",
    ],
  },

  {
    id: 6,
    title: "Packing & Delivery",

    image: packing,

    description:
      "Finished minerals are securely packed and delivered through an efficient logistics network to ensure timely and safe transportation.",

    points: [
      "Professional Packaging",
      "Fast Logistics",
      "On-Time Delivery",
    ],
  },

];

export default operationsData;
import SustainabilityHero from "../../components/sustainability/SustainabilityHero";
import CommitmentSection from "../../components/sustainability/CommitmentSection";
import SustainabilityPillars from "../../components/sustainability/SustainabilityPillars";
import ESGSection from "../../components/sustainability/ESGSection";
import SafetySection from "../../components/sustainability/SafetySection";
import EventsSection from "../../components/sustainability/EventsSection";
import SustainabilityCTA from "../../components/sustainability/SustainabilityCTA";

import "./Sustainability.css";

export default function Sustainability() {
  return (
    <>
      <SustainabilityHero />

      <CommitmentSection />

      <SustainabilityPillars />

      <ESGSection />

      <SafetySection />

      <EventsSection />

      <SustainabilityCTA />
    </>
  );
}

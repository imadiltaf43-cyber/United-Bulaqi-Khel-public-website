import MainLayout from "../../layouts/MainLayout";

import SustainabilityHero from "../../components/sustainability/SustainabilityHero";
import CommitmentSection from "../../components/sustainability/CommitmentSection";
import SustainabilityPillars from "../../components/sustainability/SustainabilityPillars";
import ESGSection from "../../components/sustainability/ESGSection";
import SafetySection from "../../components/sustainability/SafetySection";
import SustainabilityCTA from "../../components/sustainability/SustainabilityCTA";
import SustainabilityEvents from "../../components/sustainability/SustainabilityEvents";

import "./Sustainability.css";

export default function Sustainability() {
  return (
    <MainLayout>
      <SustainabilityHero />

      <CommitmentSection />

      <SustainabilityPillars />

      <ESGSection />

      <SafetySection />

      <SustainabilityEvents />

      <SustainabilityCTA />
    </MainLayout>
  );
}
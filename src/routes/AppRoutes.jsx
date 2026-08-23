import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About/About";
import Administration from "../pages/Administration/Administration";

import Minerals from "../pages/Minerals/Minerals";
import MineralDetails from "../pages/MineralDetails/MineralDetails";

import Operations from "../pages/Operations/Operations";

import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

import Sustainability from "../pages/Sustainability/Sustainability";

import Investors from "../pages/Investors/Investors";
import InvestorDetails from "../pages/InvestorDetails/InvestorDetails";

import Careers from "../pages/Careers/Careers";
import JobDetails from "../pages/Careers/JobDetails";
import ApplyJob from "../pages/Careers/ApplyJob";

import Contact from "../pages/Contact";

// M-02: Import a 404 Not Found page
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* ================= Home ================= */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* ================= About ================= */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* ================= Administration ================= */}
        {/* C-03/M-07: Consistent layout wrapping — AppRoutes owns the MainLayout */}
        <Route
          path="/administration"
          element={
            <MainLayout>
              <Administration />
            </MainLayout>
          }
        />

        {/* ================= Minerals ================= */}
        <Route
          path="/minerals"
          element={
            <MainLayout>
              <Minerals />
            </MainLayout>
          }
        />

        <Route
          path="/minerals/:id"
          element={
            <MainLayout>
              <MineralDetails />
            </MainLayout>
          }
        />

        {/* ================= Operations ================= */}
        <Route
          path="/operations"
          element={
            <MainLayout>
              <Operations />
            </MainLayout>
          }
        />

        {/* ================= Projects ================= */}
        <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <MainLayout>
              <ProjectDetails />
            </MainLayout>
          }
        />

        {/* ================= Sustainability ================= */}
        <Route
          path="/sustainability"
          element={
            <MainLayout>
              <Sustainability />
            </MainLayout>
          }
        />

        {/* ================= Investors ================= */}
        <Route
          path="/investors"
          element={
            <MainLayout>
              <Investors />
            </MainLayout>
          }
        />

        <Route
          path="/investors/:id"
          element={
            <MainLayout>
              <InvestorDetails />
            </MainLayout>
          }
        />

        {/* ================= Careers ================= */}
        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />

        <Route
          path="/careers/apply/:id"
          element={
            <MainLayout>
              <ApplyJob />
            </MainLayout>
          }
        />

        <Route
          path="/careers/:id"
          element={
            <MainLayout>
              <JobDetails />
            </MainLayout>
          }
        />

        {/* ================= Contact ================= */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* ================= 404 — MUST be last ================= */}
        {/* M-02: Catch-all 404 route */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
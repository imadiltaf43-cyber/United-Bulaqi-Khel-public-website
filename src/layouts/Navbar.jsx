import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/images/logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Administration", path: "/administration" },
    { name: "Our Minerals", path: "/minerals" },
    { name: "Operations", path: "/operations" },
    { name: "Projects", path: "/projects" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Investors", path: "/investors" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`main-navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-container">

        {/* ================= Logo ================= */}

        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="UBKE"
            className="brand-logo"
          />

          <div className="brand-text">

            <h4>UNITED</h4>

            <h3>BULAQI KHEL</h3>

            <span>ENTERPRISES</span>

          </div>

        </NavLink>

        {/* ================= Desktop Menu ================= */}

        <nav className="desktop-menu">

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* ================= Mobile Button ================= */}

        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >

        {navItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={closeMenu}
          >

            {item.name}

          </NavLink>

        ))}

      </div>

    </header>
  );
}
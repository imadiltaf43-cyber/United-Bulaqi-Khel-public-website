import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const buttons = [
  {
    title: "Explore Minerals",
    link: "/minerals",
  },
  {
    title: "Explore Projects",
    link: "/projects",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export default function HeroButtons({ onVideoClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === buttons.length - 1 ? 0 : prev + 1
      );
    }, 180000); // 3 Minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-buttons">

      <Link
        to={buttons[current].link}
        className="gold-btn hero-btn-animation"
      >
        {buttons[current].title}
        <FaArrowRight />
      </Link>

      <button
        className="video-btn"
        onClick={onVideoClick}
      >
        <FaPlayCircle />
        Watch Video
      </button>

    </div>
  );
}
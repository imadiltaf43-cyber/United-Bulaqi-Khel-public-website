import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "900", margin: 0 }}>404</h1>
      <h2 style={{ marginTop: "1rem" }}>Page Not Found</h2>
      <p style={{ color: "#666", marginTop: "0.5rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          background: "#b8860b",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

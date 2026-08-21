import heroImage from "../../assets/images/sustainability/hero-sustainability.jpg";

export default function SustainabilityHero() {
  return (
    <section
      className="sustainability-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container sustainability-hero-content">

        <div className="compact-hero-breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Sustainability</span>
        </div>

        <span className="compact-hero-tag">Responsible Growth</span>

        <h1>

          Responsible Mining

          <br />

          Building A Better Future

        </h1>

        <div className="compact-hero-line"></div>

      </div>
    </section>
  );
}
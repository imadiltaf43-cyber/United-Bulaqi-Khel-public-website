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

        <span className="breadcrumb">

          Home /

          <span> Sustainability</span>

        </span>

        <h1>

          Responsible Mining

          <br />

          Building A Better Future

        </h1>

        <p>

          At United Bulaqi Khel Enterprises, sustainability is at the heart of
          everything we do. We strive to protect the environment, empower
          communities, and ensure safe mining practices for future generations.

        </p>

      </div>
    </section>
  );
}
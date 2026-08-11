import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaLinkedinIn,
} from "react-icons/fa";

import { toast } from "react-toastify";

import heroBanner from "../assets/images/contact-banner.jpg";

import { submitContact } from "../services/contactService";

import imadImage from "../assets/images/developers/imad.jpg";
import khalfanImage from "../assets/images/developers/khalfan.jpg";
import faizImage from "../assets/images/developers/faiz.jpg";

import "../styles/Contact.css";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    subject: "",

    message: "",

  });

  //--------------------------------------------

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  //--------------------------------------------

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await submitContact(form);

      toast.success("Message sent successfully.");

      setForm({

        name: "",

        email: "",

        phone: "",

        subject: "",

        message: "",

      });

    }

    catch (err) {

      toast.error(

        err.response?.data?.message ||

        "Unable to send message."

      );

    }

    finally {

      setLoading(false);

    }

  };

  //--------------------------------------------

  return (

    <>

      {/* ================= HERO ================= */}

      <section

        className="contact-hero"

        style={{

          backgroundImage: `url(${heroBanner})`,

        }}

      >

        <div className="hero-overlay"></div>

        <div className="container">

          <div className="hero-content">

            <span>

              UNITED BULAQI KHEL ENTERPRISES

            </span>

            <h1>

              Contact Us

            </h1>



  

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="container">

          <div className="section-heading">

            <span>

              GET IN TOUCH

            </span>

            <h2>

              Let's Start A Conversation

            </h2>

            <p>

              Fill out the contact form or use

              the information below to reach us.

            </p>

          </div>

          <div className="contact-grid">
                        {/* ================= LEFT INFO ================= */}

            <div className="contact-info">

              <div className="info-card">

                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="info-content">

                  <h4>Office Address</h4>

                  <p>
                    United Bulaqi Khel Enterprises
                    <br />
                    Peshawar, Khyber Pakhtunkhwa
                    <br />
                    Pakistan
                  </p>

                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaPhoneAlt />
                </div>

                <div className="info-content">

                  <h4>Phone Number</h4>

                  <p>
                    +92 300 1234567
                    <br />
                    +92 91 1234567
                  </p>

                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div className="info-content">

                  <h4>Email Address</h4>

                  <p>

                    info@unitedbulaqikhel.com

                    <br />

                    hr@unitedbulaqikhel.com

                  </p>

                </div>

              </div>

              <div className="info-card">

                <div className="info-icon">
                  <FaClock />
                </div>

                <div className="info-content">

                  <h4>Office Hours</h4>

                  <p>

                    Monday – Friday

                    <br />

                    9:00 AM – 5:00 PM

                  </p>

                </div>

              </div>

            </div>

            {/* ================= CONTACT FORM ================= */}

            <div className="contact-form-wrapper">

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <h3>

                  Send Us A Message

                </h3>

                <p>

                  Fill in the form below and our
                  team will get back to you as soon
                  as possible.

                </p>

                <div className="row">

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>
                                    <div className="col-12 mb-4">

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={loading}
                    >

                      <FaPaperPlane />

                      {

                        loading

                          ? "Sending..."

                          : "Send Message"

                      }

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= GOOGLE MAP ================= */}

      <section className="contact-map">

        <iframe

          title="United Bulaqi Khel Enterprises"

          src="https://www.google.com/maps?q=Peshawar,Pakistan&output=embed"

          loading="lazy"

          allowFullScreen

          referrerPolicy="no-referrer-when-downgrade"

        />

      </section>


      {/* ================= DEVELOPMENT TEAM ================= */}

<section className="development-team-section">

  <div className="container">

    <div className="development-heading">

      <span>WEBSITE DEVELOPMENT</span>

      <h2>Development Team</h2>

    </div>

    <div className="developers-grid">

      {/* Syed Imad Iltaf */}

      <div className="developer-card">

        <div className="developer-avatar">
          <img src={imadImage} alt="Syed Imad Iltaf" />
        </div>

        <div className="developer-details">

          <h3>Syed Imad Iltaf</h3>

          <p>
            <strong>Role:</strong> Lead Developer
          </p>

          <p>
            <strong>Education:</strong> Software Engineering
          </p>

          <p>
            <strong>University:</strong> COMSATS University Islamabad
          </p>

        </div>

        <a
          href="https://www.linkedin.com/in/syed-imad-iltaf-b806782b1"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-linkedin"
          aria-label="Syed Imad Iltaf LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </div>


      {/* Khalfan Afridi */}

      <div className="developer-card">

        <div className="developer-avatar">
          <img src={khalfanImage} alt="Khalfan Afridi" />
        </div>

        <div className="developer-details">

          <h3>Khalfan Afridi</h3>

          <p>
            <strong>Role:</strong> Developer
          </p>

          <p>
            <strong>Education:</strong> Computer Science
          </p>

          <p>
            <strong>University:</strong> COMSATS University Islamabad
          </p>

        </div>

        <a
          href="https://www.linkedin.com/in/khalfan-shah-afridi-009970370/"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-linkedin"
          aria-label="Khalfan Afridi LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </div>


      {/* Faiz Khan */}

      <div className="developer-card">

        <div className="developer-avatar">
          <img src={faizImage} alt="Faiz Khan" />
        </div>

        <div className="developer-details">

          <h3>Faaiz Khan</h3>

          <p>
            <strong>Role:</strong> Testing
          </p>

          <p>
            <strong>Education:</strong> Computer Science
          </p>

          <p>
            <strong>University:</strong> COMSATS University Islamabad
          </p>

        </div>

        <a
          href="https://www.linkedin.com/in/faaiz-khan0/"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-linkedin"
          aria-label="Faiz Khan LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </div>

    </div>

  </div>

</section>
          </>

  );

}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaChartPie,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import MainLayout from "../../layouts/MainLayout";

import { getInvestor } from "../../services/investorService";

import { getImageUrl } from "../../utils/getImageUrl";

import "./InvestorDetails.css";

export default function InvestorDetails() {

  const { id } = useParams();

  const [investor, setInvestor] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadInvestor();

  }, [id]);

  const loadInvestor = async () => {

    try {

      const data = await getInvestor(id);

      setInvestor(data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  if (loading)

    return (

      <MainLayout>

        <div className="loading">

          Loading Investor...

        </div>

      </MainLayout>

    );

  if (!investor)

    return (

      <MainLayout>

        <div className="loading">

          Investor Not Found

        </div>

      </MainLayout>

    );

  return (

    <MainLayout>

      {/* Hero */}

      <section
        className="investor-banner"
        style={{
          backgroundImage: `url(${getImageUrl(investor.logo)})`,
        }}
      >

        <div className="overlay">

          <div className="container">

            <span>

              Home / Investors / {investor.companyName || investor.fullName}

            </span>

            <h1>

              {investor.companyName || investor.fullName}

            </h1>

          </div>

        </div>

      </section>

      {/* Details */}

      <section className="investor-details">

        <div className="container details-grid">

          {/* LEFT */}

          <div className="left">

            <img

              src={getImageUrl(investor.logo)}

              alt={investor.companyName}

            />

          </div>

          {/* RIGHT */}

          <div className="right">

            <h2>

              {investor.companyName || investor.fullName}

            </h2>

            <p>

              Trusted investment partner contributing to the sustainable growth and expansion of United Bulaqi Khel Enterprises.

            </p>

            <div className="investor-info-grid">

              <div>

                <FaUserTie />

                <h4>Investor</h4>

                <span>{investor.fullName}</span>

              </div>

              <div>

                <FaBuilding />

                <h4>Type</h4>

                <span>{investor.investorType}</span>

              </div>

              <div>

                <FaMoneyBillWave />

                <h4>Investment</h4>

                <span>

                  PKR {Number(investor.investmentAmount || 0).toLocaleString()}

                </span>

              </div>

              <div>

                <FaChartPie />

                <h4>Ownership</h4>

                <span>

                  {investor.ownershipPercentage}%

                </span>

              </div>

              <div>

                <FaGlobe />

                <h4>Country</h4>

                <span>

                  {investor.country}

                </span>

              </div>

              <div>

                <FaMapMarkerAlt />

                <h4>City</h4>

                <span>

                  {investor.city}

                </span>

              </div>

              <div>

                <FaEnvelope />

                <h4>Email</h4>

                <span>

                  {investor.email}

                </span>

              </div>

              <div>

                <FaPhone />

                <h4>Phone</h4>

                <span>

                  {investor.phone}

                </span>

              </div>

              <div>

                <FaCalendarAlt />

                <h4>Investment Date</h4>

                <span>

                  {new Date(
                    investor.investmentDate
                  ).toLocaleDateString()}

                </span>

              </div>

              <div>

                <FaBuilding />

                <h4>Category</h4>

                <span>

                  {investor.investmentCategory}

                </span>

              </div>

            </div>

            <div className="status">

              Status

              <span>

                {investor.status}

              </span>

            </div>

            {investor.remarks && (

              <div className="remarks">

                <h3>

                  Remarks

                </h3>

                <p>

                  {investor.remarks}

                </p>

              </div>

            )}

            <Link

              className="back-btn"

              to="/investors"

            >

              <FaArrowLeft />

              Back to Investors

            </Link>

          </div>

        </div>

      </section>

    </MainLayout>

  );

}
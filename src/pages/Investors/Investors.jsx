import { useState, useEffect } from "react";

import MainLayout from "../../layouts/MainLayout";

import InvestorGrid from "../../components/investors/InvestorGrid";
import InvestorTable from "../../components/investors/InvestorTable";

import { getInvestorsByVillage } from "../../services/investorService";

import "./Investors.css";

import heroBanner from "../../assets/images/investors/investor-banner.jpg";

export default function Investors() {

    const [selectedVillage, setSelectedVillage] = useState(null);

    const [investors, setInvestors] = useState([]);

    const [loading, setLoading] = useState(false);

    //-------------------------------------

    useEffect(() => {

        if (selectedVillage) {

            loadInvestors(selectedVillage);

        }

    }, [selectedVillage]);

    //-------------------------------------

    const loadInvestors = async (village) => {

        try {

            setLoading(true);

            const data = await getInvestorsByVillage(village);

            setInvestors(data.investors || []);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    //-------------------------------------

    return (

        <MainLayout>

            {/* HERO */}

            <section
                className="investor-hero"
                style={{
                    backgroundImage: `url(${heroBanner})`,
                }}
            >

                <div className="overlay"></div>

                <div className="container">

                    <div className="hero-content">

                        <span>

                            UNITED BULAQI KHEL ENTERPRISES

                        </span>

                        <h1>

                            Our Investors

                        </h1>

                        <p>

                            United Bulaqi Khel Enterprises proudly represents
                            the shareholders of Barkali and Attariwal villages.

                        </p>

                    </div>

                </div>

            </section>

            {

                selectedVillage === null

                ?

                (

                    <InvestorGrid

                        onSelectVillage={setSelectedVillage}

                    />

                )

                :

                (

                    <InvestorTable

                        village={selectedVillage}

                        investors={investors}

                        loading={loading}

                        onBack={() => {

                            setSelectedVillage(null);

                            setInvestors([]);

                        }}

                    />

                )

            }

        </MainLayout>

    );

}
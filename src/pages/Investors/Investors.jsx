import { useState, useEffect } from "react";

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

            // silently fail — N-08

        }

        finally {

            setLoading(false);

        }

    };

    //-------------------------------------

    return (

        <>

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

                        <div className="compact-hero-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Investors</span>
                        </div>

                        <span className="compact-hero-tag">United Bulaqi Khel Enterprises</span>

                        <h1>

                            Our Investors

                        </h1>

                        <div className="compact-hero-line"></div>

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

        </>

    );

}
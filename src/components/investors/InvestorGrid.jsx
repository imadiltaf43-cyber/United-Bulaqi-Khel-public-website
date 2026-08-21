import VillageCard from "./VillageCard";

import "./InvestorGrid.css";

import barkaliImg from "../../assets/images/investors/barkali.jpg";
import attariwalImg from "../../assets/images/investors/attariwal.jpg";

export default function InvestorGrid({

    onSelectVillage,

}) {

    const villages = [

        {

            village: "Barkali",

            totalShares: 3500,

            image: barkaliImg,

        },

        {

            village: "Attariwal",

            totalShares: 3160,

            image: attariwalImg,

        },

    ];

    return (

        <section className="village-section">

            <div className="container">

                <div className="section-title">

                    <h2>

                        Our Investors

                    </h2>

                    <p>

                        Select to view the shareholder list.

                    </p>

                </div>

                <div className="investor-village-grid">

                    {

                        villages.map((village) => (

                            <div
                                key={village.village}
                                className="col-lg-6"
                            >

                                <VillageCard

                                    {...village}

                                    onSelect={onSelectVillage}

                                />

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}
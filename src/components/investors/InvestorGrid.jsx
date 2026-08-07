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

            population: 3500,

            image: barkaliImg,

        },

        {

            village: "Attariwal",

            population: 3164,

            image: attariwalImg,

        },

    ];

    return (

        <section className="village-section">

            <div className="container">

                <div className="section-title">

                    <h2>

                        Select Your Village

                    </h2>

                    <p>

                        Choose your village to view the shareholder list.

                    </p>

                </div>

                <div className="row g-4">

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
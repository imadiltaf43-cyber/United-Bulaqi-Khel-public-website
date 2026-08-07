import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    FaArrowLeft,
    FaGem,
    FaIndustry,
    FaCheckCircle,
    FaLayerGroup,
} from "react-icons/fa";

import MainLayout from "../../layouts/MainLayout";

import { getMineral } from "../../services/mineralService";

import "./MineralDetails.css";

export default function MineralDetails() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [mineral, setMineral] = useState(null);

    useEffect(() => {
        loadMineral();
    }, [id]);

    const loadMineral = async () => {

        try {

            const data = await getMineral(id);

            setMineral(data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {
        return (
            <MainLayout>
                <div className="loading">
                    Loading...
                </div>
            </MainLayout>
        );
    }

    if (!mineral) {
        return (
            <MainLayout>
                <div className="loading">
                    Mineral Not Found
                </div>
            </MainLayout>
        );
    }

    return (

        <MainLayout>

            {/* Hero */}

            <section
                className="mineralBanner"
                style={{
                    backgroundImage: `url(${mineral.image})`,
                }}
            >

                <div className="bannerOverlay">

                    <div className="container">

                        <Link
                            to="/minerals"
                            className="backBtn"
                        >
                            <FaArrowLeft />
                            Back to Minerals
                        </Link>

                        <h1>{mineral.name}</h1>

                        <p>
                            Premium Industrial Mineral
                        </p>

                    </div>

                </div>

            </section>

            {/* Details */}

            <section className="mineralSection">

                <div className="container detailsWrapper">

                    <div className="detailsImage">

                        <img
                            src={mineral.image}
                            alt={mineral.name}
                        />

                    </div>

                    <div className="detailsContent">

                        <span className="categoryBadge">
                            {mineral.category}
                        </span>

                        <h2>{mineral.name}</h2>

                        <p>
                            {mineral.description}
                        </p>

                        <div className="infoCards">

                            <div className="infoCard">

                                <FaIndustry />

                                <div>

                                    <h4>Category</h4>

                                    <p>{mineral.category}</p>

                                </div>

                            </div>

                            <div className="infoCard">

                                <FaGem />

                                <div>

                                    <h4>Purity</h4>

                                    <p>{mineral.purity || "N/A"}</p>

                                </div>

                            </div>

                            <div className="infoCard">

                                <FaLayerGroup />

                                <div>

                                    <h4>Hardness</h4>

                                    <p>{mineral.hardness || "N/A"}</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Uses */}

            {mineral.uses?.length > 0 && (

                <section className="usesSection">

                    <div className="container">

                        <h2>Applications</h2>

                        <div className="usesGrid">

                            {mineral.uses.map((use, index) => (

                                <div
                                    className="useCard"
                                    key={index}
                                >

                                    <FaCheckCircle />

                                    <span>{use}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* Gallery */}

            {mineral.gallery?.length > 0 && (

                <section className="gallerySection">

                    <div className="container">

                        <h2>Gallery</h2>

                        <div className="galleryGrid">

                            {mineral.gallery.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    alt={`${mineral.name}-${index}`}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            )}

        </MainLayout>

    );

}
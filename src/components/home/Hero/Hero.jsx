import "./Hero.css";
import heroImages from "./heroImages";

import { useEffect, useState } from "react";

import HeroButtons from "./HeroButtons";
import HeroStatsCard from "./HeroStatsCard";
import VideoModal from "../../ui/VideoModal";

import { getWebsiteSettings } from "../../../services/websiteSettingService";

export default function Hero() {

    const [currentImage, setCurrentImage] = useState(0);

    const [settings, setSettings] = useState(null);

    const [videoOpen, setVideoOpen] = useState(false);

    //------------------------------------------------

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((prev) =>

                prev === heroImages.length - 1

                    ? 0

                    : prev + 1

            );

        }, 6000);

        return () => clearInterval(interval);

    }, []);

    //------------------------------------------------

    useEffect(() => {

        loadWebsiteSettings();

    }, []);

    //------------------------------------------------

    const loadWebsiteSettings = async () => {

        try {

            const data = await getWebsiteSettings();

            setSettings(data.settings);

        }

        catch (err) {

            console.log(err);

        }

    };

    //------------------------------------------------

    return (

        <>

            <section

                className="hero"

                style={{

                    backgroundImage: `url(${heroImages[currentImage]})`

                }}

            >

                <div className="hero-overlay"></div>

                <div className="container hero-container">

                    <div className="hero-wrapper">

                        {/* LEFT CONTENT */}

                        <div className="hero-left">

                            <span className="hero-tag">

                                UNITED BULAQI KHEL ENTERPRISES

                            </span>

                            <h1>

                                Mining Today

                                <br />

                                <span>

                                    Building Tomorrow.

                                </span>

                            </h1>

                            <p>

                                United Bulaqi Khel Enterprises delivers responsible mining, premium quality minerals, sustainable operations, and long-term value through innovation, safety, and operational excellence.

                            </p>

                            <HeroButtons

                                onVideoClick={() =>

                                    setVideoOpen(true)

                                }

                            />

                        </div>

                        {/* RIGHT CONTENT */}

                        <div className="hero-right">

                            <HeroStatsCard

                                heroStats={settings?.heroStats}

                            />

                        </div>

                    </div>

                </div>

                {/* IMAGE DOTS */}

                <div className="slider-dots">

                    {

                        heroImages.map((_, index) => (

                            <span

                                key={index}

                                onClick={() =>

                                    setCurrentImage(index)

                                }

                                className={

                                    currentImage === index

                                        ? "dot active"

                                        : "dot"

                                }

                            />

                        ))

                    }

                </div>

            </section>

            <VideoModal

                isOpen={videoOpen}

                onClose={() =>

                    setVideoOpen(false)

                }

                videoUrl={settings?.heroVideo?.url}

            />

        </>

    );

}
import "./VideoModal.css";

import { useEffect } from "react";

import { FaTimes } from "react-icons/fa";

export default function VideoModal({

    isOpen,

    onClose,

    videoUrl,

}) {

    //--------------------------------------

    useEffect(() => {

        if (isOpen) {

            document.body.style.overflow = "hidden";

        }

        else {

            document.body.style.overflow = "auto";

        }

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [isOpen]);

    //--------------------------------------

    if (!isOpen) return null;

    //--------------------------------------

    return (

        <div className="video-modal-overlay">

            <div className="video-modal">

                <button

                    className="video-close"

                    onClick={onClose}

                >

                    <FaTimes />

                </button>

                {

                    videoUrl ? (

                        <video

                            controls

                            autoPlay

                            className="hero-video"

                        >

                            <source

                                src={videoUrl}

                                type="video/mp4"

                            />

                            Your browser does not support video.

                        </video>

                    )

                    :

                    (

                        <div className="video-empty">

                            <h3>

                                No Hero Video Uploaded

                            </h3>

                            <p>

                                Upload a hero video from the Admin Panel.

                            </p>

                        </div>

                    )

                }

            </div>

        </div>

    );

}
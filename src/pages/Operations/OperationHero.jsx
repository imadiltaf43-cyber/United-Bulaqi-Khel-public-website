import { Link } from "react-router-dom";

import operationBanner from "../../assets/images/operations/banner.jpg";

export default function OperationHero() {

    return (

        <section
            className="operation-hero"
            style={{
                backgroundImage: `url(${operationBanner})`,
            }}
        >

            <div className="operation-overlay"></div>

            <div className="container operation-hero-content">

                <div className="compact-hero-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>Operations</span>
                </div>

                <span className="compact-hero-tag">Mining In Action</span>

                <h1>Operations</h1>

                <div className="compact-hero-line"></div>

            </div>

        </section>

    );

}
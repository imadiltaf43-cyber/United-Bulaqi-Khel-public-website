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

                <h1>Operations</h1>

                <div className="breadcrumb">

                    <Link to="/">Home</Link>

                    <span>/</span>

                    <span>Operations</span>

                </div>

            </div>

        </section>

    );

}
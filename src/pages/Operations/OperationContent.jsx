import { useState } from "react";

import { CheckCircle2 } from "lucide-react";

import operationsData from "./operationsData";

export default function OperationContent() {

    const [active, setActive] = useState(0);

    const operation = operationsData[active];

    return (

        <section className="operation-content">

            <div className="container">

                <div className="operation-layout">

                    {/* Sidebar */}

                    <div className="operation-sidebar">

                        {

                            operationsData.map((item, index) => (

                                <button

                                    key={item.id}

                                    onClick={() => setActive(index)}

                                    className={
                                        active === index
                                            ? "active"
                                            : ""
                                    }

                                >

                                    {item.title}

                                </button>

                            ))

                        }

                    </div>

                    {/* Content */}

                    <div className="operation-body">

                        <div className="operation-text">

                            <h2>

                                {operation.title}

                            </h2>

                            <p>

                                {operation.description}

                            </p>

                            <ul>

                                {

                                    operation.points.map((point, index) => (

                                        <li key={index}>

                                            <CheckCircle2 size={18} />

                                            {point}

                                        </li>

                                    ))

                                }

                            </ul>

                        </div>

                        <div className="operation-image">

                            <img

                                src={operation.image}

                                alt={operation.title}

                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}
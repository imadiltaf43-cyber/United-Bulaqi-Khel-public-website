import { FaArrowLeft, FaUsers } from "react-icons/fa";

import "./InvestorTable.css";

export default function InvestorTable({

    village,

    investors,

    loading,

    onBack,

}) {

    const population =

        village === "Barkali"

            ? 3500

            : 3164;

    const totalShares = investors.reduce(

        (sum, investor) => sum + Number(investor.shares),

        0

    );

    return (

        <section className="investor-table-section">

            <div className="container">

                {/* Header */}

                <div className="investor-table-header">

                    <button

                        className="back-btn"

                        onClick={onBack}

                    >

                        <FaArrowLeft />

                        Back

                    </button>

                    <div>

                        <h2>

                            {village} Shareholders

                        </h2>

                        <p>

                            Complete shareholder list of {village} village.

                        </p>

                    </div>

                </div>

                {/* Stats */}

                <div className="row g-4 mb-5">

                    <div className="col-md-4">

                        <div className="stat-card">

                            <h3>

                                Population

                            </h3>

                            <span>

                                {population}

                            </span>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="stat-card">

                            <h3>

                                Investors

                            </h3>

                            <span>

                                {investors.length}

                            </span>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="stat-card">

                            <h3>

                                Total Shares

                            </h3>

                            <span>

                                {totalShares}

                            </span>

                        </div>

                    </div>

                </div>

                {/* Table */}

                <div className="card shadow border-0">

                    <div className="card-body p-0">

                        {

                            loading

                                ?

                                (

                                    <div className="text-center py-5">

                                        <div className="spinner-border text-warning" />

                                    </div>

                                )

                                :

                                (

                                    <div className="table-responsive">

                                        <table className="table table-hover align-middle mb-0">

                                            <thead>

                                                <tr>

                                                    <th>#</th>

                                                    <th>

                                                        Investor Name

                                                    </th>

                                                    <th>

                                                        Kandy

                                                    </th>

                                                    <th>

                                                        Village

                                                    </th>

                                                    <th>

                                                        Shares

                                                    </th>

                                                </tr>

                                            </thead>

                                            <tbody>

                                                {

                                                    investors.length === 0

                                                        ?

                                                        (

                                                            <tr>

                                                                <td

                                                                    colSpan="5"

                                                                    className="text-center py-5"

                                                                >

                                                                    <FaUsers

                                                                        size={40}

                                                                        className="mb-3 text-warning"

                                                                    />

                                                                    <br />

                                                                    No shareholders found.

                                                                </td>

                                                            </tr>

                                                        )

                                                        :

                                                        (

                                                            investors.map(

                                                                (

                                                                    investor,

                                                                    index

                                                                ) => (

                                                                    <tr

                                                                        key={investor._id}

                                                                    >

                                                                        <td>

                                                                            {index + 1}

                                                                        </td>

                                                                        <td>

                                                                            <strong>

                                                                                {

                                                                                    investor.guardianName

                                                                                }

                                                                            </strong>

                                                                        </td>

                                                                        <td>

                                                                            {

                                                                                investor.kandy

                                                                            }

                                                                        </td>

                                                                        <td>

                                                                            <span className="badge bg-success">

                                                                                {

                                                                                    investor.village

                                                                                }

                                                                            </span>

                                                                        </td>

                                                                        <td>

                                                                            <strong>

                                                                                {

                                                                                    investor.shares

                                                                                }

                                                                            </strong>

                                                                        </td>

                                                                    </tr>

                                                                )

                                                            )

                                                        )

                                                }

                                            </tbody>

                                        </table>

                                    </div>

                                )

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}
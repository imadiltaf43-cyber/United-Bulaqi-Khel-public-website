import { useEffect, useState } from "react";

import EmployeeSection from "../../components/administration/EmployeeSection";
import OrganizationHierarchy from "../../components/administration/OrganizationHierarchy";

import { getEmployees } from "../../services/employeeService";

import "./Administration.css";

import heroBanner from "../../assets/images/administration/administration-hero.jpg";

export default function Administration() {

    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(true);

    //-------------------------------------

    useEffect(() => {

        fetchEmployees();

    }, []);

    //-------------------------------------

    const fetchEmployees = async () => {

        try {

            const data = await getEmployees();

            setEmployees(data.employees || []);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    //-------------------------------------
    // Groups (Head Office focused)
    //-------------------------------------

const headEmployees = employees.filter((emp) => (emp.office || "Head Office") === "Head Office");

const directors = headEmployees.filter((emp) => ((emp.designation || "") + "").toLowerCase().includes("director") || ((emp.designation || "") + "").toLowerCase().includes("chairman"));

const md = headEmployees.find((emp) => ((emp.designation || "") + "").toLowerCase().includes("managing director") || ((emp.designation || "") + "").toLowerCase().includes("md"));

const gm = headEmployees.find((emp) => ((emp.designation || "") + "").toLowerCase().includes("general manager") || ((emp.designation || "") + "").toLowerCase().includes("gm"));

// Group remaining head office employees by `department` field
const deptMap = {};
headEmployees.forEach((emp) => {
    // skip directors/md/gm from department lists
    if (directors.some((d) => d._id === emp._id)) return;
    if (md && emp._id === md._id) return;
    if (gm && emp._id === gm._id) return;

    const dept = emp.department || "Other";
    if (!deptMap[dept]) deptMap[dept] = [];
    deptMap[dept].push(emp);
});

// Any head employees not captured (should be none) go to Other
const operationalStaff = deptMap.Other || [];

    //-------------------------------------

    return (
        <>
       

            {/* Hero */}

            <section
                className="administration-hero"
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
                            <span>Administration</span>
                        </div>

                        <span className="compact-hero-tag">Our Leadership</span>

                        <h1>

                            Administration

                        </h1>

                        <div className="compact-hero-line"></div>

                    </div>

                </div>

            </section>

            {

                loading

                ?

                (

                    <div className="container py-5 text-center">

                        <div className="spinner-border text-warning"></div>

                    </div>

                )

                :

                (

                    <>

                        <OrganizationHierarchy
                            title="Head Office Hierarchy"
                            employees={employees.filter((e) => (e.office || "Head Office") === "Head Office")}
                            office={"Head Office"}
                        />

                        <EmployeeSection title="Board of Directors" employees={directors} />

                        {/* Render each department present in head office */}
                        {Object.keys(deptMap).map((dept) => (
                            <EmployeeSection key={dept} title={dept} employees={deptMap[dept]} />
                        ))}

                        {/* Fallback: if no department groups found, show operational staff */}
                        {Object.keys(deptMap).length === 0 && (
                            <EmployeeSection title="Operational Staff" employees={operationalStaff} />
                        )}

                        <OrganizationHierarchy
                            title="Chitral Office Hierarchy"
                            employees={employees.filter((e) => e.office === "Chitral")}
                            office={"Chitral"}
                        />

                        <OrganizationHierarchy
                            title="Darra Office Hierarchy"
                            employees={employees.filter((e) => e.office === "Darra")}
                            office={"Darra"}
                        />

                    </>

                )

            }

        </>

    );

}
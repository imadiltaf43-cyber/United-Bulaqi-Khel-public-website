import { useEffect, useState } from "react";

import EmployeeSection from "../../components/administration/EmployeeSection";

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
    // Groups
    //-------------------------------------

const directors = employees.filter((emp) => {
    const d = emp.designation.toLowerCase();

    return (
        d.includes("director") ||
        d.includes("chairman")
    );
});

const ceo = employees.filter((emp) => {
    const d = emp.designation.toLowerCase();

    return (
        d.includes("chief executive") ||
        d.includes("ceo")
    );
});

const seniorManagement = employees.filter((emp) => {
    const d = emp.designation.toLowerCase();

    return (
        d.includes("manager") &&
        !d.includes("director") &&
        !d.includes("chief")
    );
});

const departmentHeads = employees.filter((emp) => {
    const d = emp.designation.toLowerCase();

    return d.includes("head");
});

const operationalStaff = employees.filter((emp) => {

    return (

        !directors.some((e) => e._id === emp._id) &&
        !ceo.some((e) => e._id === emp._id) &&
        !seniorManagement.some((e) => e._id === emp._id) &&
        !departmentHeads.some((e) => e._id === emp._id)

    );

});

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

                    
                        <h1>

                            Administration

                        </h1>

                        <p>

                            Meet the leadership and management team driving
                            United Bulaqi Khel Enterprises toward sustainable
                            growth and operational excellence.

                        </p>

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

                        <EmployeeSection

                            title="Board of Directors"

                            employees={directors}

                        />

                        <EmployeeSection

                            title="Chief Executive Officer"

                            employees={ceo}

                        />

                        <EmployeeSection

                            title="Senior Management"

                            employees={seniorManagement}

                        />

                        <EmployeeSection

                            title="Department Heads"

                            employees={departmentHeads}

                        />

                        <EmployeeSection

                            title="Operational Staff"

                            employees={operationalStaff}

                        />

                    </>

                )

            }

        </>

    );

}
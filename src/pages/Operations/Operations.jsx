import OperationHero from "./OperationHero";
import OperationProcess from "./OperationProcess";
import OperationContent from "./OperationContent";

import "./Operations.css";

export default function Operations() {

    return (

        <>

            {/* Hero Banner */}

            <OperationHero />

            {/* Process Timeline */}

            <OperationProcess />

            {/* Main Operations */}

            <OperationContent />

        </>

    );

}
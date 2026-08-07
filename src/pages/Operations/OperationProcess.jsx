import {
    Search,
    ClipboardList,
    Pickaxe,
    Factory,
    ShieldCheck,
    Truck,
    ChevronRight,
} from "lucide-react";

const process = [

    {
        title: "Exploration",
        icon: Search,
    },

    {
        title: "Survey & Analysis",
        icon: ClipboardList,
    },

    {
        title: "Extraction",
        icon: Pickaxe,
    },

    {
        title: "Crushing & Processing",
        icon: Factory,
    },

    {
        title: "Quality Control",
        icon: ShieldCheck,
    },

    {
        title: "Packing & Delivery",
        icon: Truck,
    },

];

export default function OperationProcess() {

    return (

        <section className="operation-process">

            <div className="container">

                <h2>

                    Our Operations

                </h2>

                <div className="process-line">

                    {

                        process.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    className="process-item"
                                    key={index}
                                >

                                    <div className="process-circle">

                                        <Icon size={34} />

                                    </div>

                                    <span>

                                        {item.title}

                                    </span>

                                    {

                                        index !== process.length - 1 && (

                                            <ChevronRight className="process-arrow" />

                                        )

                                    }

                                </div>

                            );

                        })

                    }

                </div>

            </div>

        </section>

    );

}
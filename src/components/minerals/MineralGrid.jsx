import MineralCard from "./MineralCard";

import "./MineralGrid.css";

export default function MineralGrid({
    minerals
}) {
    return (

        <div className="minerals-grid">

            {minerals.map((mineral) => (

                <MineralCard
                    key={mineral._id}
                    mineral={mineral}
                />

            ))}

        </div>

    );
}
import AnimatedCounter from "../../common/AnimatedCounter";
import {
  Award,
  Pickaxe,
  Truck,
  Users,
} from "lucide-react";

export default function HeroStatsCard({ heroStats }) {
  const stats = [
    {
      icon: Award,
      value: heroStats?.yearsExperience || 0,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Pickaxe,
      value: heroStats?.miningSites || 0,
      suffix: "+",
      label: "Mining Sites",
    },
    {
      icon: Truck,
      value: heroStats?.annualOutput || "0",
      isString:
        typeof heroStats?.annualOutput === "string" && /\D/.test(heroStats?.annualOutput),
      label: "Tons Annual Output",
    },
    {
      icon: Users,
      value: heroStats?.skilledEmployees || 0,
      suffix: "+",
      label: "Skilled Employees",
    },
  ];

  return (
    <div className="hero-stats-card">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="stat"
          >
            <div className="stat-icon">
              <Icon
                size={34}
                strokeWidth={2.2}
              />
            </div>

            <div className="stat-content">
              <h2>
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix || ""}
                  isString={item.isString}
                />
              </h2>
              <p>{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
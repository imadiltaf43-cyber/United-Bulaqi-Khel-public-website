import { useEffect, useState } from "react";
import { Award, Pickaxe, Truck, Users } from "lucide-react";

import AnimatedCounter from "../common/AnimatedCounter";
import { getWebsiteSettings } from "../../services/websiteSettingService";

import "./HomeStats.css";

export default function HomeStats() {
  const [heroStats, setHeroStats] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getWebsiteSettings();
        setHeroStats(data.settings?.heroStats);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSettings();
  }, []);

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
        typeof heroStats?.annualOutput === "string" && /\D/.test(heroStats.annualOutput),
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
    <section className="home-stats">
      <div className="container">
        <div className="home-stats-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="home-stat">
                <Icon size={36} strokeWidth={1.8} />
                <h2>
                  <AnimatedCounter
                    end={item.value}
                    suffix={item.suffix || ""}
                    isString={item.isString}
                  />
                </h2>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

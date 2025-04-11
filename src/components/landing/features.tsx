import { features } from "../../constants";
import FeatureCard from "../ui/feature-card";

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-8 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[60%]">
            <h2 className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
              Powerful features to help you manage all your leads
            </h2>
          </div>
          <p className="text-white/70 md:max-w-2xs md:text-justify">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, key) => (
            <FeatureCard
              key={key}
              icon={
                feat.iconType === "image" ? (
                  <img src={feat.iconSrc} alt={feat.title} />
                ) : null
              }
              title={feat.title}
              description={feat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

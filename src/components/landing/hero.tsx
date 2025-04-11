import { Link } from "react-router-dom";
import MacScreen from "../ui/mac-screen";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-[#7214FF50] rounded-full blur-[390px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-96 h-96 bg-[#32CAFD50] rounded-full blur-[390px]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
            A CRM dashboard for engineering teams
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Analyze growth at a granular level. Identify trends and patterns in
            how your audience engages with your content. Take action on what
            matters most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-[#7214FF] hover:bg-[#7214FF80] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Get a Demo
            </Link>
            <button className="text-white border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full cursor-pointer font-medium transition-colors">
              View pricing
            </button>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto">
          <MacScreen
            isCode={false}
            isWindowFocused={false}
            borderColor="#282D45"
            content={
              <div className="flex items-center justify-center p-12 bg-[#0E1330] w-full h-[520px] select-none">
                <img src="/images/hero_dashboard.png" alt="Hero Dashboard" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Hero from "../components/landing/hero";
import Features from "../components/landing/features";
import Apps from "../components/landing/apps";
import News from "../components/landing/news";
import Mobile from "../components/landing/mobile";
import OpenSource from "../components/landing/open-source";
import Testimonials from "../components/landing/testimonial";
import Community from "../components/landing/community";

const Home = () => {
  return (
    <main className="bg-[#0F0B2A] min-h-screen">
      <Hero />
      <Features />
      <Apps />
      <Mobile />
      <OpenSource />
      <Testimonials />
      <Community />
      <News />
    </main>
  );
};

export default Home;

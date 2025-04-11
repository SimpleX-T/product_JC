import TestimonialCard from "../ui/testimonial-card";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
            What our clients say
          </h2>
          <p className="text-[#8F9BB7] max-w-xl mx-auto">
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Cameron Anderson"
            role="Engineering Lead"
            company="TechCorp"
            content="We've tried several CRM solutions, but none were tailored for engineering teams like this one. It's streamlined our workflow and improved our client communication significantly."
            avatar="/placeholder.svg?height=40&width=40"
          />
          <TestimonialCard
            name="Sophia Howard"
            role="CTO"
            company="DevStream"
            content="The security features are impressive. As someone who deals with sensitive client information daily, I appreciate the end-to-end encryption and transparent security practices."
            avatar="/placeholder.svg?height=40&width=40"
          />
          <TestimonialCard
            name="Alex Wilson"
            role="Product Manager"
            company="InnovateTech"
            content="Our team's productivity has increased by 35% since implementing this platform. The intuitive interface and powerful features make it a must-have for any engineering team."
            avatar="/placeholder.svg?height=40&width=40"
          />
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button className="w-2 h-2 rounded-full bg-purple-600"></button>
            <button className="w-2 h-2 rounded-full bg-white/20"></button>
            <button className="w-2 h-2 rounded-full bg-white/20"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

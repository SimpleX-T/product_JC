import { FaDiscord } from "react-icons/fa6";

const Community = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="h-[543px] bg-[#0E1330] flex items-center justify-center p-8 md:p-12 rounded-xl border border-[#282D45] relative overflow-hidden">
          <div className="absolute w-full h-full z-0 pointer-events-none bg-[url('/images/discord_bg.svg')] bg-cover bg-no-repeat" />
          <div className="absolute top-10 left-10 w-[180px] h-[180px] bg-[#32CAFD70] rounded-full blur-[250px]" />
          <div className="absolute top-10 right-10 w-[180px] h-[180px] bg-[#7214FF70] rounded-full blur-[250px]" />
          <div className="absolute bottom-10 right-1/2 translate-x-1/2 w-[180px] h-[180px] bg-[#5865F270] rounded-full blur-[250px]" />

          <div className="text-center relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center mx-auto mb-6">
              <FaDiscord size={80} className="text-[#5865F2]" />
            </div>

            <h2 className="text-5xl font-bold font-['Satoshi_bold'] text-[#F6F6F7] mb-4">
              Join the community
            </h2>
            <p className="text-[#8F9BB7] mb-8">
              Join our 400,000+ person community and contribute to a more
              private and decentralized internet. Start for free.
            </p>

            <button className="bg-[#5865F2] hover:bg-[#5865F280] text-[#F6F6F7] px-8 py-4 rounded-full font-medium transition-colors cursor-pointer">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <section className="py-6 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[456px_1fr] gap-8 items-center">
          <div className="rounded-[10px] border border-[#282D45] relative overflow-hidden bg-[#0E1330]">
            <div className="flex items-center justify-center relative pt-8">
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#0E1330]" />
              <div className="absolute -top-10 -right-40 w-96 h-96 bg-[#41E88D30] rounded-full blur-[390px]" />

              <img src="/images/phone_mockup.svg" alt="phone mockup" />
            </div>

            <div className="relative z-10 mt-8 overflow-hidden flex items-center justify-center p-4 md:p-8">
              <div className="absolute -bottom-2 -left-40 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px] pointer-events-none" />
              <div>
                <h3 className="text-[#F6F6F7] text-3xl font-bold font-['Satoshi_bold'] mb-4">
                  Mobile applications
                </h3>
                <p className="text-[#8F9BB7] mb-6">
                  Prem ipsum dolor sit amet consectetur. Viverra sed dignissim
                  risus aliquet condimentum. Vulputate varius feugiat egestas
                  congue
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1A3A] px-6 md:px-12 pt-8 relative rounded-[10px] border border-white/10 h-full overflow-hidden">
            <div className="absolute -bottom-2 -left-40 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px] pointer-events-none" />
            <div className="absolute -top-2 -right-40 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px] pointer-events-none" />

            <h3 className="text-[#F6F6F7] text-3xl font-bold font-['Satoshi_bold'] mb-4">
              Upload, share, and preview any file
            </h3>
            <p className="text-[#8F9BB7] mb-6">
              Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula
              massa netus nulla ultricies purus.
            </p>

            <div className="mt-4 flex items-center justify-center max-w-2xl w-full">
              <img
                src="/images/file_upload.svg"
                alt="list"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full p-4 gap-4 max-w-md mx-auto items-center justify-around mt-12">
        <Link
          to="/"
          className="bg-[#7214FF] w-full flex items-center justify-center hover:bg-[#7214FF80] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
        >
          Get Started
        </Link>
        <button className="text-white flex items-center justify-center w-full border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full cursor-pointer font-medium transition-colors">
          Browse all features
        </button>
      </div>
    </section>
  );
};

export default Mobile;

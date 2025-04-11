import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <section className="pt-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
            Essential apps that protect your
          </h2>

          <div className="flex flex-wrap justify-center gap-5 items-center">
            <div className="flex items-center gap-2 justify-center">
              <div>
                <img src="/icons/mail.svg" alt="email" className="inline" />
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent inline bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
                  Email,
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div>
                <img src="/icons/calendar.svg" alt="event" className="inline" />
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent inline bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
                  Events,
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div>
                <img src="/icons/files.svg" alt="files" className="inline" />
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent inline bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
                  Files,
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div>
                <img
                  src="/icons/documents.svg"
                  alt="documents"
                  className="inline"
                />
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent inline bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
                  Documents.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0 h-[512px]">
          <div className="bg-[#0E1330] p-8 px-20 rounded-xl md:rounded-r-none border md:border-r-transparent border-white/10 relative overflow-hidden flex items-center justify-center">
            <div className="absolute -bottom-2 -left-40 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px] pointer-events-none" />
            <div>
              <h3 className="text-[#F6F6F7] text-2xl font-['Satoshi_bold'] font-bold mb-4">
                End-to-end encrypted inbox and messages
              </h3>
              <p className="text-white/70 mb-6">
                Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor
                mauris viverra sed volutpat mauris. Amet nisi amet commodo
                adipiscing ut imperdiet nunc.
              </p>
              <Link
                to="#"
                className="text-white mt-4 inline-block border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full cursor-pointer font-medium transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="bg-[#0E1330] p-8 rounded-xl md:rounded-l-none border md:border-l-transparent border-white/10 relative overflow-hidden flex items-center justify-center">
            <div className="absolute pointer-events-none top-2 -right-32 w-96 h-96 bg-[#32CAFD30] rounded-full blur-[390px]" />

            <img src="/images/image_wrapper.svg" alt="ImageWrapper" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;

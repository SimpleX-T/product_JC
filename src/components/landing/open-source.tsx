import { motion } from "motion/react";

const OpenSource = () => {
  return (
    <section className="py-22 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#0E1330] p-4 md:p-12 rounded-xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-12 -left-20 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative overflow-hidden ">
            <div className="flex items-center justify-center">
              <div className="p-2 md:p-6">
                <h2 className="text-4xl md:text-5xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
                  Transparent, audited,
                  <br />
                  &open source
                </h2>
                <p className="text-white/70 mb-6">
                  Torem ipsum dolor sit amet consectetur. Nulla quisque
                  scelerisque eget quis. Eu amet amet eu interdum.
                </p>
                <button className="text-white border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full cursor-pointer font-medium transition-colors">
                  Browse all features
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center md:p-6">
              <img src="/images/code.svg" alt="code" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#060B27] rounded-lg border border-[#282D45] p-4 md:px-12 md:pt-8">
              <h3 className="text-[#F6F6F7] text-3xl font-bold font-['Satoshi_bold'] mb-4">
                Product Mail
              </h3>
              <p className="text-[#8F9BB7] text-md mb-4">
                Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada
                maecenas ac bibendum consectetur.
              </p>

              <div className="flex items-center justify-center mt-10">
                <img src="/images/product_mail.svg" alt="product mail" />
              </div>
            </div>

            <div className="bg-[#060B27] rounded-lg border border-[#282D45] p-4 md:px-12 md:pt-8">
              <h3 className="text-[#F6F6F7] text-3xl font-bold font-['Satoshi_bold'] mb-4">
                Product UI
              </h3>
              <p className="text-[#8F9BB7] text-md mb-4">
                Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada
                maecenas ac bibendum consectetur.
              </p>

              <div className="flex items-center justify-center mt-10">
                <img src="/images/product_ui.svg" alt="product UI" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;

const Community = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1E1A3A] p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1A3A] to-[#0F0B2A] -z-10"></div>

          {/* Stars background */}
          <div className="absolute inset-0 overflow-hidden -z-5">
            <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-20 right-30 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-30 left-60 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-60 right-60 w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Planet illustration */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-purple-600/30 rounded-full blur-[50px] -z-5"></div>

          <div className="text-center relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#2A2649] rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the community
            </h2>
            <p className="text-white/70 mb-8">
              Connect with other engineering teams, share best practices, and
              get help from our active community of users and developers.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

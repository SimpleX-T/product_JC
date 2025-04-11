const Dashboard = () => {
  return (
    <div className="bg-[#0F0B2A] rounded-lg overflow-hidden shadow-xl w-full max-w-4xl">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-400 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">
                Hello Sophia!
              </h2>
              <p className="text-gray-400">
                We hope you're having a great night.
              </p>
            </div>
          </div>

          <div className="relative">
            <button className="flex items-center justify-between gap-2 bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white w-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="flex-1 text-left">May 12 - 18</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Total Revenue */}
          <div className="bg-[#0D0A24] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="text-gray-400 text-sm">Total Revenue</span>
              <span className="text-green-400 text-xs ml-auto">+15%</span>
            </div>
            <div className="text-white text-2xl font-bold">$59,158</div>
          </div>

          {/* Subscribers */}
          <div className="bg-[#0D0A24] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-gray-400 text-sm">Subscribers</span>
              <span className="text-green-400 text-xs ml-auto">+11%</span>
            </div>
            <div className="text-white text-2xl font-bold">2,984</div>
          </div>

          {/* Conversations */}
          <div className="bg-[#0D0A24] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <span className="text-gray-400 text-sm">Conversations</span>
              <span className="text-red-400 text-xs ml-auto">-5%</span>
            </div>
            <div className="text-white text-2xl font-bold">698</div>
          </div>

          {/* Popup sales */}
          <div className="bg-[#0D0A24] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <span className="text-gray-400 text-sm">Popup sales</span>
              <span className="text-green-400 text-xs ml-auto">+15%</span>
            </div>
            <div className="text-white text-2xl font-bold">$658</div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-[#0D0A24] p-4 rounded-lg h-64 relative">
          {/* Y-axis labels */}
          <div className="absolute left-4 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>100k</span>
            <span>10k</span>
            <span>5k</span>
            <span>0</span>
          </div>

          {/* Chart visualization */}
          <div className="ml-12 h-full relative">
            {/* Chart grid lines */}
            <div className="absolute inset-0 border-b border-gray-800 border-dashed"></div>
            <div className="absolute inset-0 top-1/4 border-b border-gray-800 border-dashed"></div>
            <div className="absolute inset-0 top-1/2 border-b border-gray-800 border-dashed"></div>
            <div className="absolute inset-0 top-3/4 border-b border-gray-800 border-dashed"></div>

            {/* Chart line */}
            <svg
              className="w-full h-full"
              viewBox="0 0 700 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Line chart path */}
              <path
                d="M0,100 C50,120 100,150 150,130 C200,110 250,90 300,50 C350,20 400,40 450,60 C500,80 550,100 600,70 C650,40 700,60 700,80"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="3"
              />

              {/* Area under the line */}
              <path
                d="M0,100 C50,120 100,150 150,130 C200,110 250,90 300,50 C350,20 400,40 450,60 C500,80 550,100 600,70 C650,40 700,60 700,80 L700,200 L0,200 Z"
                fill="url(#gradient)"
                opacity="0.3"
              />

              {/* End point circle */}
              <circle
                cx="700"
                cy="80"
                r="6"
                fill="#8B5CF6"
                stroke="#0D0A24"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="ml-12 mt-2 flex justify-between text-xs text-gray-500">
            <span>Sat</span>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

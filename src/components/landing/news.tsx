const NewsCard = ({
  title,
  source,
  date,
  image,
  color,
}: {
  title: string;
  source: string;
  date: string;
  image: string;
  color: string;
}) => {
  return (
    <div className="bg-[#1E1A3A] rounded-xl border border-white/10 overflow-hidden">
      <div className={`h-40 ${color} flex items-center justify-center p-6`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">{source}</span>
          <span className="text-white/60 text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Product in the news
          </h2>
          <button className="text-purple-500 font-medium flex items-center">
            View all news
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
              className="ml-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            title="Product that is taking on Gmail for testing or pricing"
            source="TechCrunch"
            date="March 15, 2023"
            image="/placeholder.svg?height=80&width=80"
            color="bg-purple-900/30"
          />
          <NewsCard
            title="Money Tips To Opt-Out Of Google Workspace Forever"
            source="Forbes"
            date="April 22, 2023"
            image="/placeholder.svg?height=80&width=80"
            color="bg-yellow-900/30"
          />
          <NewsCard
            title="The Best Email Encryption Services for 2023"
            source="PCMag"
            date="May 10, 2023"
            image="/placeholder.svg?height=80&width=80"
            color="bg-blue-900/30"
          />
        </div>
      </div>
    </section>
  );
};

export default News;

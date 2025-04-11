import { Link } from "react-router-dom";
import NewsCard from "../ui/news-card";
import { newsArticles } from "../../constants";

const News = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start lg:items-center mb-12 flex-col md:flex-row">
          <h2 className="text-4xl lg:text-6xl font-['Satoshi_Bold'] mb-6 text-transparent bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text">
            Product in the news
          </h2>
          <Link
            to="/"
            className="bg-[#7214FF] hover:bg-[#7214FF80] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Browse all news
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((news, key) => (
            <NewsCard
              key={key}
              title={news.title}
              details={news.details}
              date={news.date}
              image={news.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({
  title,
  date,
  details,
  image,
}: {
  title: string;
  date: string;
  details: string;
  image: string;
}) => {
  return (
    <div className="bg-[#0E1330] rounded-xl border border-[#282D45] p-4 md:p-6 overflow-hidden">
      <div className="w-full flex items-center justify-center rounded-md">
        <img src={image} alt={title} className="w-full object-cover" />
      </div>
      <div className="my-6 border-b border-[#282D45] pb-6">
        <h3 className="text-[#F6F6F7] text-2xl font-bold font-['Satoshi_bold'] mb-4">
          {title}
        </h3>
        <p className="text-[#8F9BB7] text-md">{details}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[#8F9BB7] text-md">{date}</span>
        <Link
          to=""
          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
        >
          <span> Read more</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

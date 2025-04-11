const TestimonialCard = ({
  name,
  role,
  company,
  content,
  avatar,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}) => {
  return (
    <div className="bg-[#1E1A3A] p-6 rounded-xl border border-white/10">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-purple-600 rounded-full overflow-hidden mr-3">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <p className="text-white/60 text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
      <p className="text-white/80 text-sm">{content}</p>
    </div>
  );
};

export default TestimonialCard;

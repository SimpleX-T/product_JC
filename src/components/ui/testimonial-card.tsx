const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
}: {
  name: string;
  role: string;
  content: string;
  avatar: string;
}) => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-[#0E1330] z-1 text-[#F6F6F7] border border-[#282D45] p-6 rounded-xl shadow-lg max-w-sm relative overflow-hidden w-11/12 mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-sm text-white/70">{role}</p>
          </div>
        </div>

        <p className="text-sm text-white/90 leading-relaxed">{content}</p>
      </div>

      <div className="absolute -bottom-6 left-0 w-full h-30 bg-gradient-to-r from-[#A64CE860] via-[#A8E9FF60] to-[#C6FFE060] z-0 rounded-xl" />
    </div>
  );
};

export default TestimonialCard;

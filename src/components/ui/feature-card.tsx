const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#0E1330] p-6 rounded-xl border border-[#282D45] hover:border-[#7214FF60] duration-300 transition-colors">
      <div className="mb-4 text-purple-500">{icon}</div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;

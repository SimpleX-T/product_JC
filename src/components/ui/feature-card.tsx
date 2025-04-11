import { motion } from "motion/react";

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#0E1330] p-6 rounded-xl border border-[#282D45] hover:border-[#7214FF60] duration-300 transition-colors"
    >
      <div className="mb-4 text-purple-500">{icon}</div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

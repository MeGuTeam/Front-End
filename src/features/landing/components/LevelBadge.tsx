const LevelBadge: React.FC<{
  level: string;
  description: string;
  color: string;
  delay: number;
}> = ({ level, description, color, delay }) => {
  return (
    <div 
      className="relative group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className={`px-6 py-3 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-white/20`}
        style={{ 
          background: `linear-gradient(135deg, ${color}80 0%, ${color}40 100%)`,
        }}
      >
        {level}
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {description}
      </div>
    </div>
  );
};

export default LevelBadge;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Film, Image as ImageIcon } from 'lucide-react';

const MediaCard = ({ item }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className={`bg-neutral-800 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors ${item.type === "video" ? "cursor-none" : "cursor-pointer"}`}
      style={{ height: item.h }}
      onMouseMove={item.type === "video" ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
        <span className="text-neutral-700">
          {item.type === "video" ? <Film size={24} /> : <ImageIcon size={24} />}
        </span>
        <div className="absolute bottom-2 left-2 font-mono text-[9px] tracking-wider text-neutral-400 bg-black/60 px-2 py-0.5 uppercase z-10 pointer-events-none">
          {item.type === "video" ? "▶ " : ""}{item.label}
        </div>
        
        {item.type === "video" && (
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm pointer-events-none z-30 shadow-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0, 
              opacity: isHovered ? 1 : 0,
              x: mousePos.x - 40,
              y: mousePos.y - 40
            }}
            transition={{ 
              scale: { type: "spring", stiffness: 300, damping: 20 },
              opacity: { duration: 0.2 },
              x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
              y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 }
            }}
          >
            Play
          </motion.div>
        )}

        {item.type !== "video" && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white pointer-events-none">
            <Eye size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;

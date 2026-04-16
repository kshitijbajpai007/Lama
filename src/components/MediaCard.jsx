import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Film, Image as ImageIcon } from 'lucide-react';

const MediaCard = ({ item }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const getYoutubeId = (url) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  const handleClick = () => {
    if (item.type === "video") {
      if (isPlaying) {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.pause();
      } else {
        setIsPlaying(true);
        if (videoRef.current) videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div 
      className={`bg-neutral-800 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors ${item.type === "video" ? "cursor-none" : "cursor-pointer"}`}
      style={{ height: item.h }}
      onMouseMove={item.type === "video" ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Optional: you can pause when mouse leaves
        // setIsPlaying(false);
        // if (videoRef.current) videoRef.current.pause();
      }}
      onClick={handleClick}
    >
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
        {item.type === "video" ? (
          item.src && item.src.includes('youtube') ? (
            <>
              {isPlaying ? (
                <iframe 
                  src={item.src} 
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-[1.3] pointer-events-none" 
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <img 
                  src={`https://img.youtube.com/vi/${getYoutubeId(item.src)}/maxresdefault.jpg`} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                />
              )}
            </>
          ) : item.src ? (
            <video 
              ref={videoRef}
              src={item.src} 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
            />
          ) : (
            <span className="text-neutral-700"><Film size={24} /></span>
          )
        ) : (
          item.src ? (
            <img src={item.src} alt={item.label} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          ) : (
            <span className="text-neutral-700"><ImageIcon size={24} /></span>
          )
        )}
        
        <div className="absolute bottom-2 left-2 font-mono text-[9px] tracking-wider text-neutral-400 bg-black/60 px-2 py-0.5 uppercase z-10 pointer-events-none">
          {item.type === "video" ? "▶ " : ""}{item.label}
        </div>
        
        {item.type === "video" && (
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm pointer-events-none z-30 shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isHovered ? 1 : 0, 
                  opacity: isHovered ? 1 : 0,
                  x: mousePos.x - 40,
                  y: mousePos.y - 40
                }}
                exit={{ scale: 0, opacity: 0 }}
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
          </AnimatePresence>
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

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Film, Play } from 'lucide-react';

const MediaCard = ({ item, interactive = true }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const getYoutubeId = (url) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  return (
    <div 
      className={`relative overflow-hidden group border-4 border-black bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ${(item.type === "video" && interactive) ? "cursor-none" : "cursor-pointer"}`}
      style={{ height: "400px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => item.type === "video" && interactive ? item.onPlay?.(item.src) : undefined}
    >
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
        {item.type === "video" ? (
          item.src && item.src.includes('youtube') ? (
            <div className="w-full h-full relative pointer-events-none">
              <img 
                src={`https://img.youtube.com/vi/${getYoutubeId(item.src)}/maxresdefault.jpg`} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ) : (
            <video 
              ref={videoRef}
              src={item.src} 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
          )
        ) : (
          <img 
            src={item.src} 
            alt={item.title} 
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        )}
        
        {/* Project Label (Brutalist) */}
        {!interactive && (
          <div className="absolute bottom-4 left-4 bg-white border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase tracking-widest z-10 pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {item.type === "video" ? "VIDEO // " : "PHOTO // "}{item.title}
          </div>
        )}
        
        {/* Play Button Cursor Follow (Brutalist) - Only if Interactive */}
        {item.type === "video" && interactive && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-0 left-0 w-24 h-24 bg-black border-2 border-accent flex items-center justify-center text-white font-black text-sm pointer-events-none z-30 shadow-[4px_4px_0px_0px_rgba(162,198,94,0.4)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: mousePos.x - 48,
                  y: mousePos.y - 48
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  opacity: { duration: 0.15 },
                  x: { type: "spring", stiffness: 1000, damping: 40, mass: 0.2 },
                  y: { type: "spring", stiffness: 1000, damping: 40, mass: 0.2 }
                }}
              >
                <div className="flex flex-col items-center">
                  <Play size={24} fill="white" className="mb-1" />
                  <span className="text-[10px] tracking-widest uppercase">Play</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Photo View Overlay - Only if Interactive */}
        {item.type !== "video" && interactive && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white pointer-events-none">
            <div className="bg-accent text-black p-4 border-2 border-black font-black uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              View Image
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;

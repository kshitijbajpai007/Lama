import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!videoSrc) return null;

  const getYoutubeEmbedUrl = (url) => {
    if (url.includes('youtube.com/embed/')) return url;
    const match = url.match(/embed\/([^?]+)/);
    const id = match ? match[1] : null;
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&rel=0` : url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 z-[110] backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 m-auto w-[95vw] md:w-[85vw] lg:w-[70vw] aspect-video bg-black z-[120] border-[12px] border-accent shadow-[24px_24px_0px_0px_rgba(162,198,94,0.3)] flex flex-col"
          >
            <div className="absolute -top-16 right-0 md:-right-16 flex items-center gap-4">
              <span className="font-mono text-xs font-black text-accent uppercase tracking-[0.5em] hidden md:block">Now Playing // High Fidelity</span>
              <button 
                onClick={onClose}
                className="bg-accent text-black p-4 border-4 border-black hover:bg-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <X size={32} strokeWidth={4} />
              </button>
            </div>

            <div className="w-full h-full relative">
              {videoSrc.includes('youtube') ? (
                <iframe 
                  src={getYoutubeEmbedUrl(videoSrc)} 
                  className="w-full h-full" 
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <video 
                  src={videoSrc} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain" 
                />
              )}
            </div>
            
            <div className="absolute -bottom-12 left-0 font-mono text-[10px] font-black uppercase tracking-widest text-neutral-500">
              Internal Stream // Archive.001 // LAMA STUDIO
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;

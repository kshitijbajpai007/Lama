import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import MediaCard from './MediaCard';
import VideoModal from './VideoModal';

const ProjectSheet = ({ project, isOpen, onClose }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  if (!project) return null;

  // Static assets for the "organized chaos" bento grid
  const assets = [
    { id: 1, type: "video", span: "row-span-2 col-span-2", title: "Core Narrative", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, type: "photo", span: "row-span-1 col-span-1", title: "BTS 01", src: "https://images.unsplash.com/photo-1542385151-efd9000785a0" },
    { id: 3, type: "photo", span: "row-span-1 col-span-1", title: "Stills // Grade", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { id: 4, type: "video", span: "row-span-1 col-span-2", title: "Motion Study", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, type: "photo", span: "row-span-2 col-span-1", title: "Atmosphere", src: "https://images.unsplash.com/photo-1541888065063-2280d96d2ee8" },
    { id: 6, type: "photo", span: "row-span-1 col-span-1", title: "Texture", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
  ];

  const handlePlay = (src) => {
    setPlayingVideo(src);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/90 z-[60] backdrop-blur-md"
            />

            {/* Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 400, mass: 1 }}
              className="fixed right-0 top-0 h-full w-full md:w-[90vw] lg:w-[75vw] bg-white z-[70] border-l-[12px] border-accent overflow-y-auto hide-scrollbar"
            >
              <div className="sticky top-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end bg-white z-50 border-b-[8px] border-black gap-6">
                <div>
                  <span className="font-mono text-xs font-black text-accent uppercase tracking-[0.5em] mb-4 block">Case Study // Depth Verification</span>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{project.title}</h2>
                  <p className="font-mono text-sm uppercase font-black text-neutral-400 mt-4 flex items-center gap-3">
                    <span className="w-12 h-0.5 bg-black block" /> {project.client}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="group p-6 border-4 border-black bg-black text-white hover:bg-accent hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(162,198,94,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                  aria-label="Close Project Sheet"
                >
                  <X size={44} strokeWidth={4} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>

              <div className="p-8 md:p-16">
                {/* Organized Chaos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-6 md:gap-8">
                  {assets.map((asset) => (
                    <div
                      key={asset.id}
                      className={`${asset.span}`}
                    >
                      <MediaCard
                        item={{ ...asset, onPlay: handlePlay }}
                        interactive={true}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-24 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 border-t-[8px] border-black pt-16">
                  <div>
                    <h4 className="font-black uppercase text-3xl mb-8 flex items-center gap-4">
                      <span className="w-4 h-4 bg-accent" />
                      Conceptual Depth
                    </h4>
                    <p className="text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase">
                      "This project was defined by the intersection of movement and silence. Our goal was to capture the raw energy of the subject while maintaining a sterile, cinematic structure."
                    </p>
                  </div>

                  <div className="flex flex-col justify-end space-y-12">
                    <div className="grid grid-cols-2 gap-12">
                      <div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400 block mb-4 underline decoration-accent decoration-2 underline-offset-4">Primary Director</span>
                        <p className="font-black uppercase text-xl">Lama Bajpai</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400 block mb-4 underline decoration-accent decoration-2 underline-offset-4">Technical Grade</span>
                        <p className="font-black uppercase text-xl">LAMA Post-House</p>
                      </div>
                    </div>

                    <button className="w-full bg-black text-white p-8 font-black uppercase tracking-[0.2em] flex justify-between items-center group hover:bg-accent hover:text-black transition-all">
                      View Technical specs
                      <ArrowRight className="group-hover:translate-x-4 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-black text-white flex justify-between items-center border-t-[12px] border-accent">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent">LAMA // STUDIO VERIFIED</span>
                <p className="font-black uppercase text-2xl tracking-tighter">PROJECT ARCHIVE.00{project.id}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <VideoModal
        isOpen={!!playingVideo}
        onClose={() => setPlayingVideo(null)}
        videoSrc={playingVideo}
      />
    </>
  );
};

export default ProjectSheet;

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const quadrants = [
    { id: "music", label: "Music", path: "/work/music", color: "bg-white", description: "Vibe // Logic // Narrative" },
    { id: "brand", label: "Brand", path: "/work/brand", color: "bg-white", description: "Identity // Strategy // Scale" },
    { id: "food", label: "Food", path: "/work/food", color: "bg-white", description: "Taste // Texture // Frame" },
    { id: "miscellaneous", label: "Miscellaneous", path: "/work/miscellaneous", color: "bg-white", description: "Raw // Untamed // Abstract" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 pb-12 border-b-[16px] border-accent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-accent -rotate-12 blur-3xl opacity-20 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center relative z-10"
        >
          <h1 className="text-[15vw] md:text-[18vw] font-black tracking-tighter leading-none uppercase select-none flex flex-col">
            <span className="relative inline-block">
              LAMA<span className="text-accent">.</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center mt-4 text-center max-w-3xl relative z-10"
        >
          <p className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.5em] text-neutral-400 mb-12 leading-relaxed">
            Editorial photography and cinematic videography <br/> that tells your story without saying a word.
          </p>
          
          <Link 
            to="/work" 
            className="flex items-center space-x-8 group border-4 border-black bg-black text-white px-12 py-6 hover:bg-accent hover:text-black transition-all shadow-[12px_12px_0px_0px_rgba(162,198,94,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] relative overflow-hidden"
          >
            <span className="text-sm md:text-base tracking-[0.4em] uppercase font-black">Explore The Method</span>
            <ArrowRight size={28} strokeWidth={4} className="group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </motion.div>
      </section>

      {/* 2x2 Quadrant Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full border-b-[16px] border-accent">
        {quadrants.map((quad, i) => (
          <motion.div
            key={quad.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            onClick={() => navigate(quad.path)}
            className={`group relative h-[70vh] md:h-[100vh] border-black flex flex-col items-center justify-center cursor-pointer overflow-hidden
              ${i % 2 === 0 ? 'md:border-r-[8px]' : ''} 
              ${i < 2 ? 'md:border-b-[8px]' : ''}
              ${i === 0 ? 'border-b-[8px] md:border-b-[8px]' : ''}
              ${i === 1 ? 'border-b-[8px] md:border-b-[8px]' : ''}
              ${i === 2 ? 'border-b-[8px] md:border-b-0' : ''}
            `}
          >
            {/* Hover Background Expansion */}
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-mono text-sm font-black text-neutral-400 group-hover:text-black mb-4 flex items-center gap-4 transition-colors">
                <span className="w-8 h-1 bg-black group-hover:w-16 transition-all duration-500" /> SECTION // 0{i + 1}
              </span>
              <motion.h2 
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              >
                {quad.label}
              </motion.h2>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] mt-6 text-neutral-400 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                {quad.description}
              </p>
            </div>

            <div className="absolute bottom-16 right-16 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-12 group-hover:translate-x-0">
              <div className="p-6 bg-black text-white border-4 border-black group-active:translate-x-2 group-active:translate-y-2 group-active:shadow-none shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <span className="font-mono text-xs font-black uppercase tracking-[0.4em]">Initialize Flow ↗</span>
              </div>
            </div>

            {/* LayoutId Support for Page Transition */}
            <motion.div 
              layoutId={`bg-${quad.id}`}
              className="absolute inset-0 pointer-events-none"
            />
          </motion.div>
        ))}
      </section>

      {/* Narrative Section with Accent */}
      <section className="py-40 px-6 md:px-12 bg-white flex flex-col items-center text-center">
        <h3 className="font-mono text-xs font-black uppercase tracking-[0.6em] text-accent mb-12">// The Philosophy</h3>
        <p className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter max-w-6xl">
          Visual storytelling is not about what we see, but what we <span className="text-accent underline decoration-[12px] underline-offset-[16px]">feel</span> in the gaps between the frames.
        </p>
      </section>
    </div>
  );
};

export default Home;

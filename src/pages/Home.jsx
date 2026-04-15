import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center">
        {/* Background Image scoped to Hero */}
        <div className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80" 
            alt="Cinematic background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6"
            >
              CAPTURING <br />
              <span className="text-neutral-400">THE RAW</span> <br />
              MOMENTS.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-2xl text-neutral-300 max-w-xl mb-10 font-light"
            >
              Editorial photography and cinematic videography that tells your story without saying a word.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy / About Gateway */}
      <section className="relative w-full py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-neutral-400 mb-8">
              <span className="w-6 h-[1px] bg-neutral-400"></span> Our Story
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              THE SPACE WHERE <br />
              <span className="text-neutral-500">ART MEETS</span> LENS.
            </h2>
            <p className="text-lg text-neutral-400 font-light mb-10 leading-relaxed">
              Every shot should be designed from zero. No forced aesthetics. We focus on intention — capturing the genuine details that make each moment entirely yours. Follow our journey behind the camera.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-3 text-white group"
            >
              <span className="text-sm tracking-widest uppercase font-medium">Read Our Philosophy</span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Gateway */}
      <section className="relative w-full py-32 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-neutral-400 mb-8">
                <span className="w-6 h-[1px] bg-neutral-400"></span> Portfolio
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">RECENT WORK</h2>
            </div>
            <Link to="/work" className="text-sm tracking-[0.1em] uppercase text-neutral-400 hover:text-white transition-colors border-b border-white/20 pb-1">
              View Full Gallery
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Music & Live", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", delay: 0 },
              { label: "Brands & Commercial", img: "https://images.unsplash.com/photo-1542314831-c6a4d14b8ba4?w=800&q=80", delay: 0.2 },
              { label: "Food & Culinary", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", delay: 0.4 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <Link to="/work" className="group block relative overflow-hidden h-[400px]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-xl font-bold uppercase tracking-wide group-hover:-translate-y-2 transition-transform duration-300">{item.label}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps / Contact Gateway */}
      <section className="relative w-full py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-neutral-400 mb-8">
              <span className="w-6 h-[1px] bg-neutral-400"></span> Next Step
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-10">
              READY TO <br />
              COLLABORATE?
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 text-black bg-white px-8 py-4 rounded-full group hover:bg-neutral-200 transition-colors duration-300"
            >
              <span className="text-sm tracking-widest uppercase font-bold">Book a Session</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;

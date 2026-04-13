import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80" 
          alt="Cinematic background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen container mx-auto px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-neutral-300 max-w-xl mb-10 font-light"
          >
            Editorial photography and cinematic videography that tells your story without saying a word.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link 
              to="/work" 
              className="inline-flex items-center space-x-3 text-white group"
            >
              <span className="text-sm tracking-widest uppercase font-medium">Explore the Masterpiece</span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

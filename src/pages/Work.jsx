import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'music', label: 'Music', description: 'Editorial // Music Videos // Live' },
    { id: 'brand', label: 'Brand', description: 'Commercial // Product // Lifestyle' },
    { id: 'food', label: 'Food', description: 'Culinary Arts // Hospitality' },
    { id: 'miscellaneous', label: 'Miscellaneous', description: 'Experimental // Personal // Street' },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 flex flex-col">
      {/* Compact High-Contrast Selection Element */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full border-b-[8px] border-black pb-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
      >
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 block">
            Portfolio Selector // Categorical Hub
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            SELECTED <br /> <span className="text-accent underline decoration-8 underline-offset-[12px]">NARRATIVES.</span>
          </h1>
        </div>

        <div className="relative w-full md:w-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full md:w-80 border-4 border-black bg-black text-white p-6 flex justify-between items-center group hover:bg-accent hover:text-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-accent group-hover:text-black transition-colors" />
              <span className="text-sm font-black uppercase tracking-widest">Select Sector</span>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={24} strokeWidth={3} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-4 w-full md:w-96 bg-white border-4 border-black z-50 overflow-hidden shadow-[12px_12px_0px_0px_rgba(162,198,94,1)]"
              >
                {categories.map((cat, i) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigate(`/work/${cat.id}`);
                      setIsOpen(false);
                    }}
                    className="w-full p-6 border-b-2 border-neutral-100 last:border-b-0 hover:bg-black hover:text-white text-left transition-all flex flex-col gap-1 group/item"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black uppercase tracking-tighter group-hover/item:text-accent transition-colors">
                        {cat.label}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400 group-hover/item:text-white">0{i + 1}</span>
                    </div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-500 group-hover/item:text-neutral-400">
                      {cat.description}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Featured Insight Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-grow pt-12">
        <div className="border-l-[12px] border-accent pl-12 h-fit">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            A COLLECTION OF <br/> HIGH-FIDELITY <br/> STORYTELLING<span className="text-accent">.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed text-neutral-500 max-w-sm">
            From editorial depth to commercial precision, we curate moments that define the visual standard of tomorrow. Use the sector selector to explore our archive.
          </p>
        </div>
        
        <div className="w-full aspect-video bg-neutral-100 border-4 border-black relative overflow-hidden group shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]">
          <img 
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80" 
            alt="Work Showcase" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>
      </div>
    </div>
  );
};

export default Work;

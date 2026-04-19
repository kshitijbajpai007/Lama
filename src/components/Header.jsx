import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Filter, X, Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsWorkOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const categories = [
    { id: 'music', label: 'Music', description: 'Editorial // Music Videos // Live' },
    { id: 'brand', label: 'Brand', description: 'Commercial // Product // Lifestyle' },
    { id: 'food', label: 'Food', description: 'Culinary Arts // Hospitality' },
    { id: 'miscellaneous', label: 'Miscellaneous', description: 'Experimental // Personal // Street' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white border-b-8 border-accent py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-4xl font-black tracking-[-0.05em] uppercase group">
          LAMA<span className="text-accent group-hover:text-black transition-colors">.</span>
        </Link>
        
        <nav className="hidden md:flex space-x-12 items-center">
          <Link
            to="/"
            className={`text-xs font-black uppercase tracking-[0.4em] transition-all hover:translate-y-[-4px] ${
              location.pathname === '/' ? 'text-black underline decoration-accent decoration-[6px] underline-offset-8' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-xs font-black uppercase tracking-[0.4em] transition-all hover:translate-y-[-4px] ${
              location.pathname === '/about' ? 'text-black underline decoration-accent decoration-[6px] underline-offset-8' : 'text-neutral-400 hover:text-black'
            }`}
          >
            About
          </Link>

          <div 
            className="relative"
            onMouseEnter={() => setIsWorkOpen(true)}
            onMouseLeave={() => setIsWorkOpen(false)}
          >
            <button
              onClick={() => setIsWorkOpen(!isWorkOpen)}
              className={`text-xs font-black uppercase tracking-[0.4em] transition-all flex items-center gap-2 ${
                location.pathname.startsWith('/work') || isWorkOpen
                  ? 'text-black underline decoration-accent decoration-[6px] underline-offset-8 transition-all'
                  : 'text-neutral-400 hover:text-black hover:translate-y-[-4px]'
              }`}
            >
              Work
              <motion.div animate={{ rotate: isWorkOpen ? 180 : 0 }}>
                <ChevronDown size={14} strokeWidth={3} className={isWorkOpen ? 'text-accent' : ''} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isWorkOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -right-4 mt-6 w-80 bg-white border-4 border-black z-50 overflow-hidden shadow-[12px_12px_0px_0px_rgba(162,198,94,1)]"
                >
                  <div className="bg-black text-white p-4 flex items-center gap-3">
                    <Filter size={14} className="text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Select Sector</span>
                  </div>
                  {categories.map((cat, i) => (
                    <button
                      key={cat.id}
                      onClick={() => navigate(`/work/${cat.id}`)}
                      className="w-full p-5 border-b-2 border-neutral-100 last:border-b-0 hover:bg-black hover:text-white text-left transition-all flex flex-col gap-1 group/item"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-black uppercase tracking-tighter group-hover/item:text-accent transition-colors">
                          {cat.label}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-400 group-hover/item:text-white">0{i + 1}</span>
                      </div>
                      <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-neutral-500 group-hover/item:text-neutral-400">
                        {cat.description}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link
            to="/contact"
            className="bg-black text-white px-10 py-4 text-xs font-black uppercase tracking-[0.3em] border-4 border-black shadow-[6px_6px_0px_0px_rgba(162,198,94,1)] hover:bg-accent hover:text-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black transition-all active:scale-95"
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] md:hidden pt-32 px-6"
          >
            <div className="flex flex-col space-y-8">
              <Link to="/" className="text-5xl font-black uppercase tracking-tighter border-b-4 border-black pb-4">Home</Link>
              <Link to="/about" className="text-5xl font-black uppercase tracking-tighter border-b-4 border-black pb-4">About</Link>
              
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Sector Selector // Work</span>
                <div className="grid grid-cols-1 gap-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/work/${cat.id}`}
                      className="text-3xl font-black uppercase tracking-tighter bg-neutral-50 p-6 border-2 border-black hover:bg-accent transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="text-5xl font-black uppercase tracking-tighter bg-black text-white p-6 border-4 border-black">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;


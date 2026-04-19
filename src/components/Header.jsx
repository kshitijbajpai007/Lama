import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white border-b-8 border-accent py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-4xl font-black tracking-[ -0.05em] uppercase group">
          LAMA<span className="text-accent group-hover:text-black transition-colors">.</span>
        </Link>
        
        <nav className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-black uppercase tracking-[0.4em] transition-all hover:translate-y-[-4px] ${
                location.pathname === link.path || (link.path === '/work' && location.pathname.startsWith('/work'))
                  ? 'text-black underline decoration-accent decoration-[6px] underline-offset-8 transition-all'
                  : 'text-neutral-400 hover:text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="bg-black text-white px-10 py-4 text-xs font-black uppercase tracking-[0.3em] border-4 border-black shadow-[6px_6px_0px_0px_rgba(162,198,94,1)] hover:bg-accent hover:text-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-black font-black uppercase tracking-widest text-xs border-4 border-black px-6 py-3 bg-accent">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

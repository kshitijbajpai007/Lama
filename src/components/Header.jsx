import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter">
          KSHITIJ<span className="text-neutral-500">.</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Mobile menu toggle could go here */}
        <div className="md:hidden">
          <button className="text-neutral-400 hover:text-white">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

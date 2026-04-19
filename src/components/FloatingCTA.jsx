import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Plus } from 'lucide-react';

const FloatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-3"
          >
            <a
              href="mailto:hello@example.com"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={2.5} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-green-500 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} strokeWidth={2.5} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black transition-colors"
        aria-label="Contact actions"
      >
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={24} strokeWidth={2.5} />
        </motion.div>
      </button>
    </div>
  );
};

export default FloatingCTA;

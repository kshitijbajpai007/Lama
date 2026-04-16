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
              href="mailto: princegmrllama@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white shadow-lg hover:bg-neutral-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/+917303781109"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black shadow-2xl hover:scale-105 transition-transform duration-300"
        aria-label="Contact actions"
      >
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={24} />
        </motion.div>
      </button>
    </div>
  );
};

export default FloatingCTA;

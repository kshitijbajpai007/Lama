import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-28 pb-12 px-6 md:px-12 container mx-auto flex flex-col md:flex-row gap-16">
      {/* Contact Form Section */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          LET'S <br /> COLLABORATE.
        </h1>
        <p className="text-neutral-400 text-lg font-light max-w-md mb-12">
          Open for editorial commissions, brand campaigns, and visual storytelling projects globally.
        </p>

        <form className="space-y-8 flex-grow">
          <div className="relative group">
            <input 
              type="text" 
              id="name" 
              placeholder=" "
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors peer" 
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 top-0 text-neutral-500 transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-base pointer-events-none"
            >
              Your Name
            </label>
          </div>
          
          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              placeholder=" "
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors peer" 
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 top-0 text-neutral-500 transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-base pointer-events-none"
            >
              Email Address
            </label>
          </div>

          <div className="relative group pt-4">
            <textarea 
              id="message" 
              rows="4"
              placeholder=" "
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none" 
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-0 top-4 text-neutral-500 transition-all duration-300 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base pointer-events-none"
            >
              Project Details
            </label>
          </div>

          <button type="button" className="group flex items-center justify-between w-full p-4 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 mt-8">
            <span className="uppercase tracking-widest text-sm font-medium">Send Inquiry</span>
            <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </form>

        <div className="mt-16 flex flex-col md:flex-row gap-8 text-neutral-400 text-sm tracking-wide">
          <div className="flex items-center space-x-3">
            <Mail size={16} />
            <a href="mailto:hello@example.com" className="hover:text-white transition-colors">hello@example.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={16} />
            <span>Los Angeles / Worldwide</span>
          </div>
        </div>
      </motion.div>

      {/* Calendly Placeholder Section */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col"
      >
        <div className="w-full h-full min-h-[500px] border border-white/10 rounded-xl bg-neutral-900/50 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-50 block z-0" />
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
            <div className="w-20 h-20 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Discovery Call</h3>
            <p className="text-neutral-400 mb-8 max-w-sm">
              Schedule a 30-minute consultation directly in my calendar to discuss your creative vision.
            </p>
            
            <button className="px-8 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors">
              Book via Calendly
            </button>
            <p className="text-neutral-600 text-xs mt-6 uppercase tracking-wider">[ Calendly Embed Placeholder ]</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

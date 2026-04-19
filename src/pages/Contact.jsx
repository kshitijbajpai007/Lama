import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            LET'S <br /> 
            <span style={{ WebkitTextStroke: '2px black' }} className="text-transparent">BUILD.</span>
          </h1>
          <p className="font-mono text-sm font-bold text-neutral-600 max-w-md mb-12">
            Open for editorial commissions, brand campaigns, and visual storytelling projects globally.
          </p>

          <form className="space-y-6 flex-grow">
            <div>
              <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white border-4 border-black p-4 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400 font-medium"
                placeholder="JOHN DOE"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white border-4 border-black p-4 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400 font-medium"
                placeholder="HELLO@EXAMPLE.COM"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Project Brief</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full bg-white border-4 border-black p-4 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400 font-medium resize-none"
                placeholder="TELL US ABOUT YOUR VISION..."
              ></textarea>
            </div>

            <button type="button" className="w-full bg-black text-white font-black uppercase tracking-widest py-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all text-sm mt-4">
              Submit Proposal
            </button>
          </form>
        </motion.div>

        {/* Discovery Call Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <div className="w-full h-full min-h-[500px] border-4 border-black bg-neutral-100 flex flex-col items-center justify-center p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Direct Line</h3>
            <p className="font-mono text-sm text-neutral-600 mb-8 max-w-sm font-bold">
              Bypass the inbox. Schedule a 30-minute consultation directly in my calendar.
            </p>
            
            <button className="px-8 py-4 bg-white text-black font-black text-sm tracking-widest uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              Book via Calendly
            </button>
            
            <div className="mt-12 flex flex-col items-center gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Or Reach Out Directly:</span>
              <a href="mailto:hello@example.com" className="font-black text-xl hover:underline decoration-4 underline-offset-4">HELLO@EXAMPLE.COM</a>
              <span className="font-mono text-sm font-bold">LOS ANGELES / WORLDWIDE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

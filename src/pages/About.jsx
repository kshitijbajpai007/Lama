import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-32 border-b-8 border-black pb-24">
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden border-8 border-black shadow-[12px_12px_0px_0px_rgba(162,198,94,1)]"
        >
          <img 
            src="https://images.unsplash.com/photo-1554046920-90dc5f3ac6ed?auto=format&fit=crop&w=800&q=80" 
            alt="Portrait of Photographer" 
            loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Narrative Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col justify-center"
        >
          <h2 className="text-sm font-black tracking-[0.4em] text-neutral-400 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-1 bg-accent" /> THE STORY
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.85] uppercase">
            OBSESSED WITH THE <br /> <span className="text-accent underline decoration-[10px] underline-offset-[12px]">ALCHEMY OF LIGHT.</span>
          </h1>
          
          <div className="space-y-8 text-black font-medium text-xl md:text-2xl leading-relaxed mb-12">
            <p>
              I am a visual artist specializing in editorial portraits and cinematic videography. 
              My approach is rooted in the belief that the most profound stories are told in the 
              quiet spaces between the posed moments.
            </p>
            <p>
              With over a decade of experience across the globe, I strive to create imagery that 
              feels both timeless and intimately present. It's about capturing the authentic essence 
              of a subject—unfiltered, raw, and fundamentally human.
            </p>
          </div>
        </motion.div>
      </div>

      {/* The Method Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2">The Method</h2>
        <p className="font-mono text-xs uppercase font-black text-accent tracking-[0.5em] mb-16 underline decoration-black decoration-2 underline-offset-8">Our 3-Phase Architecture</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="border-[6px] border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all bg-white group hover:bg-accent duration-500">
            <h3 className="text-9xl font-black text-white group-hover:text-black transition-colors" style={{ WebkitTextStroke: '3px black' }}>01</h3>
            <h4 className="text-3xl font-black uppercase mt-6 mb-6">Concept & Design</h4>
            <p className="font-mono text-sm leading-relaxed text-black font-bold">
              Pre-production is where the magic is designed. We blueprint every frame, align on narrative goals, and draft a meticulous visual strategy before a camera is ever lifted.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-[6px] border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all bg-black text-white group hover:bg-white hover:text-black duration-500">
            <h3 className="text-9xl font-black text-transparent group-hover:text-black transition-colors" style={{ WebkitTextStroke: '3px white' }}>02</h3>
            <h4 className="text-3xl font-black uppercase mt-6 mb-6">Master Production</h4>
            <p className="font-mono text-sm leading-relaxed text-neutral-400 group-hover:text-black font-bold transition-colors">
              Execution demands precision. Leveraging Sony Alpha 1, FX6 pipelines, and masterfully sculpted lighting, we capture the highest fidelity assets on set with minimal friction.
            </p>
          </div>

          {/* Column 3 */}
          <div className="border-[6px] border-black p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all bg-white group hover:bg-accent duration-500">
            <h3 className="text-9xl font-black text-white group-hover:text-black transition-colors" style={{ WebkitTextStroke: '3px black' }}>03</h3>
            <h4 className="text-3xl font-black uppercase mt-6 mb-6">Color & Rhythm</h4>
            <p className="font-mono text-sm leading-relaxed text-black font-bold">
              Post-production forms the soul. Narrative-driven editing paired with bespoke cinematic color grading ensures the final deliverable speaks with unmistakable authority.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

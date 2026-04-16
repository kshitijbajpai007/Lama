import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 container mx-auto">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 aspect-[3/4] relative overflow-hidden"
      >
        <img
          src="/LamaAboutPhoto.jpeg"
          alt="Portrait of Lama"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      {/* Narrative Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h2 className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-4">The Story</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
          OBSESSED WITH THE <br /> ALCHEMY OF LIGHT.
        </h1>

        <div className="space-y-6 text-neutral-400 font-light text-lg mb-12">
          <p>
            I'm a visual artist specializing in editorial portraits and cinematic videography.
            My approach is rooted in the belief that the most profound stories are told in the
            quiet spaces between the posed moments.
          </p>
          <p>
            With over a decade of experience across the globe, I strive to create imagery that
            feels both timeless and intimately present. It's about capturing the authentic essence
            of a subject—unfiltered, raw, and fundamentally human.
          </p>
        </div>

        <div className="pt-8 border-t border-white/10">
          <h3 className="text-white text-xl font-medium mb-4">Gear & Philosophy</h3>
          <ul className="text-neutral-400 font-light space-y-2">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full block"></span>
              <span>Sony Alpha 1 / FX6 Cinematic Line</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full block"></span>
              <span>Vintage Leica M-Series for intimate authenticity</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full block"></span>
              <span>Minimal interference, maximum observation</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-32">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden border-8 border-black shadow-[12px_12px_0px_0px_rgba(162,198,94,1)]"
        >
          <img
            src="/LamaAboutPhoto.jpeg"
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


    </div>
  );
};

export default About;

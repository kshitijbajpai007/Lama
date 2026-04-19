import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, ArrowLeft } from 'lucide-react';
import MediaCard from '../components/MediaCard';
import ProjectSheet from '../components/ProjectSheet';

const MOCK_DATA = {
  music: {
    title: "Music",
    sections: [
      {
        id: "live",
        label: "Live Performances",
        projects: [
          { id: "concert-1", title: "Midnight Echo", client: "Artist Name", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "concert-2", title: "Neon Nights", client: "Band Name", type: "photo", src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a" },
          { id: "concert-3", title: "Solstice", client: "The Echoes", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "concert-4", title: "Pulse", client: "CyberVibe", type: "photo", src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745" },
        ]
      },
      {
        id: "mv",
        label: "Music Videos",
        projects: [
          { id: "mv-1", title: "Gravity", client: "Singer X", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "mv-2", title: "Vortex", client: "DJ Void", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "mv-3", title: "Silhouette", client: "Noir", type: "photo", src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d" },
          { id: "mv-4", title: "Afterglow", client: "Dawn", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ]
      }
    ]
  },
  brand: {
    title: "Brand",
    sections: [
      {
        id: "commercial",
        label: "Commercials",
        projects: [
          { id: "brand-1", title: "Lumina Watch", client: "Lumina", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "brand-2", title: "Drift Automotives", client: "Drift", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "brand-3", title: "Terra Organic", client: "Terra", type: "photo", src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
          { id: "brand-4", title: "Onyx Style", client: "Onyx", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ]
      }
    ]
  },
  food: {
    title: "Food",
    sections: [
      {
        id: "culinary",
        label: "Culinary Arts",
        projects: [
          { id: "food-1", title: "Sizzle", client: "Chef G", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "food-2", title: "Umami", client: "Sushin", type: "photo", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
          { id: "food-3", title: "Caffeine", client: "Roast", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "food-4", title: "Harvest", client: "Rooted", type: "photo", src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061" },
        ]
      }
    ]
  },
  miscellaneous: {
    title: "Miscellaneous",
    sections: [
      {
        id: "experimental",
        label: "Experimental",
        projects: [
          { id: "misc-1", title: "Abstract Light", client: "Personal", type: "photo", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" },
          { id: "misc-2", title: "Urban Decay", client: "Street Study", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "misc-3", title: "Fluidity", client: "Motion Art", type: "photo", src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab" },
          { id: "misc-4", title: "Chaos Theory", client: "Exploration", type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ]
      }
    ]
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const data = MOCK_DATA[category?.toLowerCase()] || MOCK_DATA.music;
  const [expandedSection, setExpandedSection] = useState(data.sections[0]?.id);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16 border-b-4 border-black pb-8 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <Link to="/work" className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] mb-6 hover:text-accent transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Categories
          </Link>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            {data.title}
          </h1>
        </div>
        <p className="font-mono text-sm uppercase text-neutral-400 font-bold tracking-widest max-w-[200px] text-right">
          Sectional Breakdown // Explorations
        </p>
      </motion.div>

      <div className="space-y-4">
        {data.sections.map((section) => (
          <div key={section.id} className="border-b-4 border-black">
            <button 
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex justify-between items-center py-8 text-left group"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-lg font-black text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  // {section.projects.length}
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 group-hover:text-accent">
                  {section.label}
                </h2>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 border-2 border-transparent group-hover:border-black group-hover:bg-accent transition-all"
              >
                <ChevronDown size={40} strokeWidth={4} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-16 pt-4">
                    {section.projects.map((project) => (
                      <div 
                        key={project.id} 
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer group/card"
                      >
                        <MediaCard item={project} interactive={false} />
                        <div className="mt-6 flex justify-between items-end border-l-4 border-transparent group-hover/card:border-accent pl-6 transition-all duration-300">
                          <div>
                            <h3 className="font-black uppercase text-2xl md:text-3xl leading-none group-hover/card:text-accent transition-colors">{project.title}</h3>
                            <p className="font-mono text-xs text-neutral-500 mt-2 uppercase tracking-widest font-bold">Client: {project.client}</p>
                          </div>
                          <span className="font-black uppercase text-xs tracking-widest bg-black text-white px-3 py-1 scale-0 group-hover/card:scale-100 transition-transform origin-right">
                            Full Case →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <ProjectSheet 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default CategoryPage;

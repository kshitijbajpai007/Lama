import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Eye, Film, Image as ImageIcon, Music2, Briefcase, Coffee, Layers } from 'lucide-react';
import MediaCard from '../components/MediaCard';

const CATEGORIES = [
  {
    id: "music", className: "bg-gradient-to-br from-neutral-900 to-black hover:from-purple-900/10",
    Icon: Music2, label: "Music", span: true,
    desc: "Concert films, artist portraits & live event coverage that capture raw energy.",
    count: "24 Projects",
    items: [
      { type: "video", h: 180, label: "Music Video", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" }, 
      { type: "photo", h: 160, label: "Live Shot", src: "https://images.unsplash.com/photo-1540039155732-d68a2bf62c01?auto=format&fit=crop&w=600&q=80" },
      { type: "photo", h: 200, label: "Artist Portrait", src: "https://images.unsplash.com/photo-1493225457224-eda0e6fdca03?auto=format&fit=crop&w=600&q=80" }, 
      { type: "video", h: 180, label: "Concert Film", src: "https://www.youtube.com/embed/yWvxUbgPnrk?autoplay=1&mute=1&controls=0&loop=1&playlist=yWvxUbgPnrk" },
      { type: "photo", h: 160, label: "Backstage", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" }, 
      { type: "video", h: 200, label: "Lyric Video", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" },
      { type: "photo", h: 160, label: "Press Kit", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" }, 
      { type: "photo", h: 180, label: "Tour Doc", src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80" },
    ]
  },
  {
    id: "brands", className: "bg-gradient-to-br from-neutral-900 to-black hover:from-amber-600/10",
    Icon: Briefcase, label: "Brands", span: false,
    desc: "Commercial campaigns & branded storytelling for global names.",
    count: "18 Projects",
    items: [
      { type: "video", h: 180, label: "TVC Spot", src: "https://www.youtube.com/embed/yWvxUbgPnrk?autoplay=1&mute=1&controls=0&loop=1&playlist=yWvxUbgPnrk" }, 
      { type: "photo", h: 200, label: "Product Still", src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
      { type: "video", h: 160, label: "Social Film", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" }, 
      { type: "photo", h: 180, label: "Lookbook", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" },
      { type: "photo", h: 200, label: "Campaign", src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" }, 
      { type: "video", h: 160, label: "Launch Film", src: "https://www.youtube.com/embed/yWvxUbgPnrk?autoplay=1&mute=1&controls=0&loop=1&playlist=yWvxUbgPnrk" },
    ]
  },
  {
    id: "food", className: "bg-gradient-to-br from-neutral-900 to-black hover:from-orange-700/10",
    Icon: Coffee, label: "Food", span: false,
    desc: "Culinary photography & food films that make flavours visual.",
    count: "15 Projects",
    items: [
      { type: "photo", h: 200, label: "Hero Shot", src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80" }, 
      { type: "photo", h: 160, label: "Detail", src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80" },
      { type: "video", h: 180, label: "Recipe Film", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" }, 
      { type: "photo", h: 200, label: "Menu Shoot", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" },
      { type: "photo", h: 160, label: "Plating", src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" }, 
      { type: "video", h: 180, label: "Chef Profile", src: "https://www.youtube.com/embed/yWvxUbgPnrk?autoplay=1&mute=1&controls=0&loop=1&playlist=yWvxUbgPnrk" },
    ]
  },
  {
    id: "misc", className: "bg-gradient-to-br from-neutral-900 to-black hover:from-teal-700/10",
    Icon: Layers, label: "Miscellaneous", span: true,
    desc: "Personal projects, documentary work & experimental visuals.",
    count: "32 Projects",
    items: [
      { type: "video", h: 180, label: "Short Film", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" }, 
      { type: "photo", h: 200, label: "Street", src: "https://images.unsplash.com/photo-1510488057273-0498b671a5cb?auto=format&fit=crop&w=600&q=80" },
      { type: "photo", h: 160, label: "Travel Doc", src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=600&q=80" }, 
      { type: "video", h: 180, label: "Docu", src: "https://www.youtube.com/embed/yWvxUbgPnrk?autoplay=1&mute=1&controls=0&loop=1&playlist=yWvxUbgPnrk" },
      { type: "photo", h: 200, label: "Landscape", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80" }, 
      { type: "photo", h: 160, label: "Experimental", src: "https://images.unsplash.com/photo-1506744626753-143bc3fe95bb?auto=format&fit=crop&w=600&q=80" },
      { type: "video", h: 180, label: "Personal", src: "https://www.youtube.com/embed/aOwmt39L2IQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aOwmt39L2IQ" }, 
      { type: "photo", h: 200, label: "Aerial", src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80" },
    ]
  },
];

const Work = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive(prev => prev === id ? null : id);

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-6 md:px-12 container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-neutral-400 mb-5">
            <span className="w-6 h-[1px] bg-neutral-400"></span> Portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95]">THE WORK</h1>
        </div>
        <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
          Click any category to explore the full gallery. A mix of photo and video work spanning four disciplines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat, i) => {
          const isActive = active === cat.id;
          return (
            <div key={`wrapper-${cat.id}`} className={cat.span ? "lg:col-span-2 col-span-1 contents" : "col-span-1 contents"}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => toggle(cat.id)}
                className={`
                  ${cat.span ? "lg:col-span-2" : "col-span-1"}
                  ${cat.className}
                  min-h-[220px] p-8 border hover:scale-[1.015] duration-300
                  flex flex-col justify-between cursor-pointer relative overflow-hidden group
                  ${isActive ? "border-neutral-500" : "border-white/10 hover:border-white/20"}
                `}
              >
                <div>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300
                    ${isActive ? "border-neutral-400 text-white" : "border-white/10 text-neutral-500 group-hover:border-neutral-700 group-hover:text-white"}`}
                  >
                    <cat.Icon size={16} />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter uppercase mt-4 mb-1">{cat.label}</h2>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-[260px]">{cat.desc}</p>
                  <p className="font-mono text-[10px] tracking-widest text-neutral-500 mt-4 uppercase">
                    {cat.count}
                  </p>
                </div>

                <div className="absolute bottom-4 right-5 text-white/5 font-bold text-8xl pointer-events-none mb-0 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                
                <div className={`absolute bottom-6 right-6 transition-all duration-300 ${isActive ? "text-white rotate-180" : "text-neutral-600 group-hover:text-white group-hover:rotate-45"}`}>
                  <ChevronDown size={20} />
                </div>
              </motion.div>

              {/* Collapsible Gallery Panel */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={`gp-${cat.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="col-span-1 lg:col-span-3 overflow-hidden origin-top"
                  >
                    <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 mt-2 mb-4">
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <cat.Icon size={18} className="text-neutral-400" />
                          <span className="text-2xl font-bold tracking-tighter uppercase">{cat.label} Gallery</span>
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">{cat.count}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {cat.items.map((item, j) => (
                          <MediaCard key={j} item={item} />
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Clients & Collaborators Strip */}
      <div className="mt-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
        <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-neutral-400 mb-6">
          <span className="w-6 h-[1px] bg-neutral-400"></span> Clients & Collaborators
        </div>
        <div className="flex flex-wrap gap-3">
          {["Sony Music","Universal","Red Bull","Nike","Zomato","Tanishq","Vogue India","HSBC","Nykaa","Kingfisher","Star Sports","GQ"].map(c => (
            <div 
              key={c} 
              className="border border-white/10 px-5 py-2.5 text-xs font-medium text-neutral-500 hover:text-white hover:border-white/30 transition-colors duration-300 cursor-default tracking-widest"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

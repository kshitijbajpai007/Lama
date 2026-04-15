const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Name */}
        <div className="text-2xl font-bold tracking-tighter uppercase text-white">
          Lama
        </div>
        
        {/* Middle: Social Icons (Grayscaled) */}
        <div className="flex items-center gap-6 text-neutral-500">
          <a href="#" className="hover:text-neutral-300 transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="grayscale group-hover:grayscale-0 transition-all duration-300"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="grayscale group-hover:grayscale-0 transition-all duration-300"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="grayscale group-hover:grayscale-0 transition-all duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="grayscale group-hover:grayscale-0 transition-all duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        
        {/* Right: Copyright */}
        <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">
          &copy; {new Date().getFullYear()} Lama. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="border-t-2 border-black bg-white text-black py-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold uppercase tracking-widest text-lg">Lama.</p>
          <p className="font-mono text-xs text-neutral-500 mt-1 uppercase">Available for worldwide travel</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4">Instagram</a>
          <a href="#" className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4">Vimeo</a>
          <a href="#" className="font-mono text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

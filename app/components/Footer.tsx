export default function Footer() {
  return (
    <footer className="py-12 px-8 text-center" 
      style={{background: '#030208', borderTop: '1px solid #1e0a3c'}}>
      <div className="mb-4">
        <span className="text-xl font-bold text-white tracking-widest">NFT </span>
        <span className="text-xl font-bold tracking-widest" style={{color: '#a78bfa'}}>VOID</span>
      </div>
      <p className="text-sm tracking-widest mb-6" style={{color: '#4c1d95'}}>THE ULTIMATE NFT GALLERY</p>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <a href="#gallery" className="text-xs tracking-widest px-5 py-2 transition-all"
          style={{border: '1px solid #3b0764', color: '#6d28d9', borderRadius: '9999px'}}>GALLERY</a>
        <a href="#story" className="text-xs tracking-widest px-5 py-2 transition-all"
          style={{border: '1px solid #3b0764', color: '#6d28d9', borderRadius: '9999px'}}>STORY</a>
        <a href="#about" className="text-xs tracking-widest px-5 py-2 transition-all"
          style={{border: '1px solid #3b0764', color: '#6d28d9', borderRadius: '9999px'}}>ABOUT</a>
        <a href="#contact" className="text-xs tracking-widest px-5 py-2 transition-all"
          style={{border: '1px solid #3b0764', color: '#6d28d9', borderRadius: '9999px'}}>CONTACT</a>
      </div>
      <p className="text-xs" style={{color: '#2e1065'}}>© 2026 NFT VOID. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
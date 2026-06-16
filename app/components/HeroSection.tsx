'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{background: 'linear-gradient(135deg, rgba(10,10,15,0.85) 0%, rgba(13,5,32,0.85) 50%, rgba(10,10,15,0.85) 100%)'}}>
      
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #3b0764 0%, transparent 60%)',
        opacity: 0.4
      }}/>

      <div className="relative z-10 text-center px-6">
        <p className="text-xs md:text-sm tracking-[0.5em] mb-4" style={{color: '#7c3aed'}}>WELCOME TO</p>
        <h1 className="text-5xl md:text-9xl font-bold mb-6" style={{
          background: 'linear-gradient(135deg, #f5f3ff, #c4b5fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>NFT VOID</h1>
        <p className="text-sm md:text-lg text-gray-400 mb-10 tracking-widest">THE ULTIMATE NFT GALLERY</p>
        <a href="#gallery" className="px-8 py-4 text-xs md:text-sm tracking-widest font-medium transition-all"
          style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}
          onMouseEnter={e => (e.currentTarget.style.background = '#3b0764')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
          EXPLORE GALLERY
        </a>
      </div>

    </section>
  );
}
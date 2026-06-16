import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8" style={{background: '#08040f'}}>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-[0.5em] mb-3" style={{color: '#7c3aed'}}>CREATOR</p>
          <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-widest">ABOUT</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-widest">
                Mohammad Hossein <span style={{color: '#a78bfa'}}>Lamizadeh</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>
                Iranian digital artist and Computer Engineering student with a deep passion for Artificial Intelligence. 
                Currently in my first year, building the future one line of code at a time.
              </p>
              <p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>
                NFT VOID is my creative universe — inspired by animated characters and animals, 
                reimagined through a cyberpunk lens. Each artwork tells a story of its own.
              </p>
              <p className="text-sm leading-relaxed" style={{color: '#a1a1aa'}}>
                My vision is to blend AI-assisted creativity with storytelling, 
                creating a living digital mythology that grows over time.
              </p>

              <div className="flex gap-4 pt-4 flex-wrap">
                <a href="https://instagram.com/mamad.Lami" target="_blank"
                  className="text-xs tracking-widest px-6 py-3 transition-all"
                  style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>
                  INSTAGRAM
                </a>
                <a href="https://t.me/Mamad_12345" target="_blank"
                  className="text-xs tracking-widest px-6 py-3 transition-all"
                  style={{border: '1px solid #3b0764', color: '#7c3aed', borderRadius: '9999px'}}>
                  TELEGRAM
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative">
              <div className="relative overflow-hidden"
                style={{border: '1px solid #3b0764', borderRadius: '12px'}}>
                <Image 
                  src="/profile.png" 
                  alt="Mohammad Hossein Lamizadeh"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                  style={{filter: 'brightness(0.9)'}}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, #08040f 0%, transparent 50%)',
                }}/>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6" 
                style={{border: '1px solid #7c3aed', borderLeft: 'none', borderBottom: 'none'}}/>
              <div className="absolute -bottom-2 -left-2 w-6 h-6"
                style={{border: '1px solid #7c3aed', borderRight: 'none', borderTop: 'none'}}/>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16" style={{borderTop: '1px solid #1e0a3c'}}>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2" style={{color: '#a78bfa'}}>40+</p>
              <p className="text-xs tracking-widest" style={{color: '#4c1d95'}}>PLANNED ARTWORKS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2" style={{color: '#a78bfa'}}>∞</p>
              <p className="text-xs tracking-widest" style={{color: '#4c1d95'}}>STORIES TO TELL</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2" style={{color: '#a78bfa'}}>1</p>
              <p className="text-xs tracking-widest" style={{color: '#4c1d95'}}>UNIVERSE</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
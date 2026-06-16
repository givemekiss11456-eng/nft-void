'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
      style={{background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #3b0764'}}>
      
      <div className="flex items-center">
        <Image src="/logo.svg" alt="NFT VOID" width={80} height={80}/>
      </div>

      {/* منو دسکتاپ */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">GALLERY</a>
        <a href="#story" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">STORY</a>
        <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">ABOUT</a>
        <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">CONTACT</a>
      </div>

      {/* دکمه hamburger */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="flex flex-col gap-1.5">
          <span className="w-6 h-px block transition-all"
            style={{background: menuOpen ? '#a78bfa' : '#ffffff'}}/>
          <span className="w-6 h-px block transition-all"
            style={{background: menuOpen ? '#a78bfa' : '#ffffff', opacity: menuOpen ? 0 : 1}}/>
          <span className="w-6 h-px block transition-all"
            style={{background: menuOpen ? '#a78bfa' : '#ffffff'}}/>
        </div>
      </button>

      {/* منو موبایل */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full py-8 flex flex-col items-center gap-5 md:hidden"
          style={{background: 'rgba(0,0,0,0.95)', borderBottom: '1px solid #3b0764'}}>
          {['GALLERY', 'STORY', 'ABOUT', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest px-8 py-3 transition-all"
              style={{
                border: '1px solid #7c3aed',
                color: '#a78bfa',
                borderRadius: '9999px',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3b0764')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {item}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}
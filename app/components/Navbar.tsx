'use client';
import Image from 'next/image';
import { useState } from 'react';
import WalletButton from './WalletButton';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
      style={{background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #3b0764'}}>
      
      <div className="flex items-center">
        <Image src="/logo.svg" alt="NFT VOID" width={80} height={80}/>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">GALLERY</a>
        <a href="#story" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">STORY</a>
        <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">ABOUT</a>
        <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm tracking-widest">CONTACT</a>
        <WalletButton />
      </div>

      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="flex flex-col gap-1.5">
          <span className="w-6 h-px block" style={{background: menuOpen ? '#a78bfa' : '#ffffff'}}/>
          <span className="w-6 h-px block" style={{background: menuOpen ? '#a78bfa' : '#ffffff', opacity: menuOpen ? 0 : 1}}/>
          <span className="w-6 h-px block" style={{background: menuOpen ? '#a78bfa' : '#ffffff'}}/>
        </div>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full py-8 flex flex-col items-center gap-5 md:hidden"
          style={{background: 'rgba(0,0,0,0.95)', borderBottom: '1px solid #3b0764'}}>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-xs tracking-widest px-8 py-3" style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>GALLERY</a>
          <a href="#story" onClick={() => setMenuOpen(false)} className="text-xs tracking-widest px-8 py-3" style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>STORY</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-xs tracking-widest px-8 py-3" style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>ABOUT</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xs tracking-widest px-8 py-3" style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>CONTACT</a>
          <WalletButton />
        </div>
      )}
    </nav>
  );
}
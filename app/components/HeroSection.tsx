'use client';
import { useTheme } from './ThemeProvider';

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, rgba(10,10,15,0.85) 0%, rgba(13,5,32,0.85) 50%, rgba(10,10,15,0.85) 100%)'
          : 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #f5f3ff 100%)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #3b0764 0%, transparent 60%)',
          opacity: isDark ? 0.4 : 0.08,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-xs md:text-sm tracking-[0.5em] mb-4" style={{ color: '#7c3aed' }}>
          WELCOME TO
        </p>
        <h1
          className="text-5xl md:text-9xl font-bold mb-6"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #f5f3ff, #c4b5fd)'
              : 'linear-gradient(135deg, #4c1d95, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NFT VOID
        </h1>
        <p
          className="text-sm md:text-lg mb-10 tracking-widest"
          style={{ color: isDark ? '#9ca3af' : '#555555' }}
        >
          THE ULTIMATE NFT GALLERY
        </p>
        <a
          href="#gallery"
          className="px-8 py-4 text-xs md:text-sm tracking-widest font-medium transition-all"
          style={{
            border: '1px solid #7c3aed',
            color: '#a78bfa',
            borderRadius: '9999px',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = isDark ? '#3b0764' : '#ede9fe')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          EXPLORE GALLERY
        </a>
      </div>
    </section>
  );
}
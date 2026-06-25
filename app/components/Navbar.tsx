'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WalletButton from './WalletButton';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const navBg = isDark
    ? 'rgba(0,0,0,0.8)'
    : 'rgba(255,255,255,0.9)';

  const menuBg = isDark
    ? 'rgba(0,0,0,0.95)'
    : 'rgba(255,255,255,0.98)';

  const borderColor = isDark ? '#3b0764' : '#d8b4fe';
  const linkColor = isDark ? '#a78bfa' : '#7c3aed';
  const hamburgerColor = isDark ? '#ffffff' : '#111111';

  return (
    <nav
      className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
      style={{
        background: navBg,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="flex items-center">
        <Image src="/logo.svg" alt="NFT VOID" width={80} height={80} />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['#gallery','#story','#about','#contact'].map((href) => (
          <a
            key={href}
            href={href}
            className="hover:text-purple-400 transition-colors text-sm tracking-widest"
            style={{ color: isDark ? '#9ca3af' : '#444444' }}
          >
            {href.replace('#','').toUpperCase()}
          </a>
        ))}
        <Link
          href="/blog"
          className="hover:text-purple-400 transition-colors text-sm tracking-widest"
          style={{ color: isDark ? '#9ca3af' : '#444444' }}
        >
          BLOG
        </Link>
        <WalletButton />
      </div>

      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="flex flex-col gap-1.5">
          <span className="w-6 h-px block" style={{ background: menuOpen ? '#a78bfa' : hamburgerColor }} />
          <span className="w-6 h-px block" style={{ background: menuOpen ? '#a78bfa' : hamburgerColor, opacity: menuOpen ? 0 : 1 }} />
          <span className="w-6 h-px block" style={{ background: menuOpen ? '#a78bfa' : hamburgerColor }} />
        </div>
      </button>

      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full py-8 flex flex-col items-center gap-5 md:hidden"
          style={{
            background: menuBg,
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          {['#gallery','#story','#about','#contact'].map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest px-8 py-3"
              style={{
                border: `1px solid ${linkColor}`,
                color: linkColor,
                borderRadius: '9999px',
              }}
            >
              {href.replace('#','').toUpperCase()}
            </a>
          ))}
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-widest px-8 py-3"
            style={{
              border: `1px solid ${linkColor}`,
              color: linkColor,
              borderRadius: '9999px',
            }}
          >
            BLOG
          </Link>
          <WalletButton />
        </div>
      )}
    </nav>
  );
}
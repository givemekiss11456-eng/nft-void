'use client';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className="py-12 px-8 text-center"
      style={{
        background: isDark ? '#030208' : '#faf5ff',
        borderTop: `1px solid ${isDark ? '#1e0a3c' : '#d8b4fe'}`,
        transition: 'background 0.3s ease',
      }}
    >
      <div className="mb-4">
        <span
          className="text-xl font-bold tracking-widest"
          style={{ color: isDark ? '#ffffff' : '#111111' }}
        >
          NFT{' '}
        </span>
        <span className="text-xl font-bold tracking-widest" style={{ color: '#a78bfa' }}>
          VOID
        </span>
      </div>
      <p className="text-sm tracking-widest mb-6" style={{ color: isDark ? '#4c1d95' : '#7c3aed' }}>
        THE ULTIMATE NFT GALLERY
      </p>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['#gallery', '#story', '#about', '#contact'].map((href) => (
          <a
            key={href}
            href={href}
            className="text-xs tracking-widest px-5 py-2 transition-all"
            style={{
              border: `1px solid ${isDark ? '#3b0764' : '#a78bfa'}`,
              color: isDark ? '#6d28d9' : '#7c3aed',
              borderRadius: '9999px',
            }}
          >
            {href.replace('#', '').toUpperCase()}
          </a>
        ))}
      </div>
      <p className="text-xs" style={{ color: isDark ? '#2e1065' : '#7c3aed' }}>
        © 2026 NFT VOID. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
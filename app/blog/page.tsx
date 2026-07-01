'use client';
import Link from 'next/link';
import { useState } from 'react';
import { blogPosts } from '../lib/blogPosts';
import { useTheme } from '../components/ThemeProvider';

export default function BlogPage() {
  const [lang, setLang] = useState<'en' | 'fa'>('en');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen" style={{ background: isDark ? '#050505' : '#faf5ff', transition: 'background 0.3s ease' }}>
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
        style={{
          background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${isDark ? '#3b0764' : '#d8b4fe'}`,
        }}>
        <Link href="/" className="text-sm tracking-widest hover:text-purple-400"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>← BACK TO HOME</Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
            className="text-xs tracking-widest px-4 py-1.5 rounded-full transition-all"
            style={{ border: '1px solid #7c3aed', color: '#a78bfa' }}>
            {lang === 'en' ? 'فارسی' : 'ENGLISH'}
          </button>
          <span className="text-sm tracking-widest" style={{ color: '#a78bfa' }}>BLOG</span>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.5em] mb-3 text-center" style={{ color: '#7c3aed' }}>ARTIST NOTES</p>
        <h1 className="text-5xl font-bold tracking-widest mb-16 text-center"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>THE BLOG</h1>

        <div className="flex flex-col gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-6 rounded-2xl transition-all"
                style={{
                  border: `1px solid ${isDark ? '#1e0a3c' : '#d8b4fe'}`,
                  background: isDark ? '#0a0414' : '#ffffff',
                }}
                dir={lang === 'fa' ? 'rtl' : 'ltr'}>
                <p className="text-xs tracking-widest mb-2" style={{ color: '#7c3aed' }}>{post.date}</p>
                <h2 className="text-2xl font-bold mb-3" style={{ color: isDark ? '#ffffff' : '#111111' }}>
                  {post.title[lang]}
                </h2>
                <p style={{ color: isDark ? '#9ca3af' : '#555555' }}>{post.excerpt[lang]}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4" style={{ color: isDark ? '#9ca3af' : '#555555' }}>Explore the full collection</p>
          <Link href="/#gallery" className="inline-block px-8 py-3 text-sm tracking-widest rounded-xl"
            style={{ border: '1px solid #7c3aed', color: isDark ? '#a78bfa' : '#7c3aed' }}>
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </div>
  );
}
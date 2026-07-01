'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { blogPosts } from '../../lib/blogPosts';
import { useTheme } from '../../components/ThemeProvider';

export default function BlogPostPage() {
  const params = useParams();
  const [lang, setLang] = useState<'en' | 'fa'>('en');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: isDark ? '#050505' : '#faf5ff' }}>
        <div className="text-center">
          <p className="mb-4" style={{ color: isDark ? '#ffffff' : '#111111' }}>Post not found.</p>
          <Link href="/blog" className="text-sm" style={{ color: '#a78bfa' }}>← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: isDark ? '#050505' : '#faf5ff', transition: 'background 0.3s ease' }}>
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
        style={{
          background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${isDark ? '#3b0764' : '#d8b4fe'}`,
        }}>
        <Link href="/blog" className="text-sm tracking-widest hover:text-purple-400"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>← ALL POSTS</Link>
        <button
          onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
          className="text-xs tracking-widest px-4 py-1.5 rounded-full transition-all"
          style={{ border: '1px solid #7c3aed', color: '#a78bfa' }}>
          {lang === 'en' ? 'فارسی' : 'ENGLISH'}
        </button>
      </nav>

      <article className="pt-32 pb-20 px-8 max-w-2xl mx-auto" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <p className="text-xs tracking-widest mb-3" style={{ color: '#7c3aed' }}>{post.date}</p>
        <h1 className="text-4xl font-bold mb-10 leading-tight"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>
          {post.title[lang]}
        </h1>

        <div className="flex flex-col gap-6">
          {post.content[lang].map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed"
              style={{ color: isDark ? '#d1d5db' : '#333333' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 flex justify-between items-center"
          style={{ borderTop: `1px solid ${isDark ? '#1e0a3c' : '#d8b4fe'}` }}>
          <Link href="/blog" className="text-sm tracking-widest"
            style={{ color: '#a78bfa' }}>← ALL POSTS</Link>
          <Link href="/#gallery" className="text-sm tracking-widest px-6 py-2 rounded-full"
            style={{ border: '1px solid #7c3aed', color: isDark ? '#a78bfa' : '#7c3aed' }}>
            VIEW GALLERY
          </Link>
        </div>
      </article>
    </div>
  );
}
'use client';
import Link from 'next/link';

const posts = [
  {
    slug: 'birth-of-void',
    title: 'The Birth of VOID',
    date: 'June 2026',
    excerpt: 'How a cyberpunk universe was born from late-night code and AI-generated art.',
  },
  {
    slug: 'why-cyberpunk',
    title: 'Why Cyberpunk?',
    date: 'June 2026',
    excerpt: 'Exploring the aesthetic choices behind the VOID collection — neon, darkness, and the space between human and machine.',
  },
  {
    slug: 'building-in-public',
    title: 'Building NFT VOID in Public',
    date: 'June 2026',
    excerpt: 'A behind-the-scenes look at building an NFT platform from scratch as a solo developer.',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{background: '#050505'}}>
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
        style={{background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #3b0764'}}>
        <Link href="/" className="text-white text-sm tracking-widest hover:text-purple-400">← BACK TO HOME</Link>
        <span className="text-sm tracking-widest" style={{color: '#a78bfa'}}>BLOG</span>
      </nav>

      <div className="pt-32 pb-20 px-8 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.5em] mb-3 text-center" style={{color: '#7c3aed'}}>ARTIST NOTES</p>
        <h1 className="text-5xl font-bold text-white tracking-widest mb-16 text-center">THE BLOG</h1>

        <div className="flex flex-col gap-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-6 rounded-2xl transition-all"
                style={{border: '1px solid #1e0a3c', background: '#0a0414'}}>
                <p className="text-xs tracking-widest mb-2" style={{color: '#7c3aed'}}>{post.date}</p>
                <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
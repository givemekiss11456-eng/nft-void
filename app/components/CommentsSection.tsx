'use client';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const initialComments = [
  { id: 1, name: 'CryptoArt', text: 'Amazing collection! Love the cyberpunk vibes 🔥', date: '2026-06-01' },
  { id: 2, name: 'VoidHunter', text: 'VOID #003 is absolutely stunning!', date: '2026-06-03' },
];

export default function CommentsSection() {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = () => {
    if (!name || !text) return;
    setComments([...comments, { id: Date.now(), name, text, date: new Date().toISOString().split('T')[0] }]);
    setName('');
    setText('');
  };

  const cardBg = isDark ? '#0a0414' : '#ffffff';
  const cardBorder = isDark ? '#1e0a3c' : '#d8b4fe';
  const inputBg = isDark ? '#0d0520' : '#f5f3ff';
  const inputBorder = isDark ? '#2e1065' : '#c4b5fd';
  const inputText = isDark ? '#ffffff' : '#111111';

  return (
    <section id="comments" className="py-24 px-8"
      style={{ background: isDark ? '#07040f' : '#faf5ff', transition: 'background 0.3s ease' }}>
      <div className="max-w-3xl mx-auto">

        <p className="text-center text-sm tracking-[0.5em] mb-3" style={{ color: '#7c3aed' }}>COMMUNITY</p>
        <h2 className="text-center text-4xl font-bold mb-16 tracking-widest"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>COMMENTS</h2>

        <div className="space-y-6 mb-16">
          {comments.map((c) => (
            <div key={c.id} className="p-6"
              style={{ border: `1px solid ${cardBorder}`, background: cardBg, borderRadius: '12px', transition: 'background 0.3s ease' }}>
              <div className="flex justify-between mb-3">
                <span className="font-bold tracking-widest" style={{ color: '#a78bfa' }}>{c.name}</span>
                <span className="text-xs" style={{ color: isDark ? '#4c1d95' : '#7c3aed' }}>{c.date}</span>
              </div>
              <p className="text-sm leading-relaxed"
                style={{ color: isDark ? '#d1d5db' : '#444444' }}>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4"
          style={{ border: `1px solid ${cardBorder}`, padding: '2rem', background: cardBg, borderRadius: '12px' }}>
          <h3 className="tracking-widest text-sm font-bold mb-6"
            style={{ color: isDark ? '#ffffff' : '#111111' }}>LEAVE A COMMENT</h3>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 text-sm outline-none"
            style={{ background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: '9999px', color: inputText }}
          />
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Your comment..."
            rows={4}
            className="w-full px-4 py-3 text-sm outline-none resize-none"
            style={{ background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: '12px', color: inputText }}
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 text-sm tracking-widest font-medium transition-all"
            style={{
              background: isDark ? '#3b0764' : '#7c3aed',
              color: '#ffffff',
              border: '1px solid #7c3aed',
              borderRadius: '9999px',
            }}>
            SUBMIT COMMENT
          </button>
        </div>

      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';

const initialComments = [
  { id: 1, name: 'CryptoArt', text: 'Amazing collection! Love the cyberpunk vibes 🔥', date: '2026-06-01' },
  { id: 2, name: 'VoidHunter', text: 'VOID #003 is absolutely stunning!', date: '2026-06-03' },
];

export default function CommentsSection() {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!name || !text) return;
    setComments([...comments, { id: Date.now(), name, text, date: new Date().toISOString().split('T')[0] }]);
    setName('');
    setText('');
  };

  return (
    <section id="comments" className="py-24 px-8" style={{background: '#07040f'}}>
      <div className="max-w-3xl mx-auto">

        <p className="text-center text-sm tracking-[0.5em] mb-3" style={{color: '#7c3aed'}}>COMMUNITY</p>
        <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-widest">COMMENTS</h2>

        <div className="space-y-6 mb-16">
          {comments.map((c) => (
            <div key={c.id} className="p-6" style={{border: '1px solid #1e0a3c', background: '#0a0414', borderRadius: '12px'}}>
              <div className="flex justify-between mb-3">
                <span className="font-bold tracking-widest" style={{color: '#a78bfa'}}>{c.name}</span>
                <span className="text-xs" style={{color: '#4c1d95'}}>{c.date}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4" style={{border: '1px solid #1e0a3c', padding: '2rem', background: '#0a0414', borderRadius: '12px'}}>
          <h3 className="text-white tracking-widest text-sm font-bold mb-6">LEAVE A COMMENT</h3>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 text-sm text-white outline-none"
            style={{background: '#0d0520', border: '1px solid #2e1065', borderRadius: '9999px'}}
          />
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Your comment..."
            rows={4}
            className="w-full px-4 py-3 text-sm text-white outline-none resize-none"
            style={{background: '#0d0520', border: '1px solid #2e1065', borderRadius: '12px'}}
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 text-sm tracking-widest font-medium transition-all"
            style={{background: '#3b0764', color: '#a78bfa', border: '1px solid #7c3aed', borderRadius: '9999px'}}>
            SUBMIT COMMENT
          </button>
        </div>

      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    setSent(true);
    setName(''); setEmail(''); setMessage('');
  };

  const cardBg = isDark ? '#0a0414' : '#ffffff';
  const cardBorder = isDark ? '#1e0a3c' : '#d8b4fe';
  const inputBg = isDark ? '#0d0520' : '#f5f3ff';
  const inputBorder = isDark ? '#2e1065' : '#c4b5fd';
  const inputText = isDark ? '#ffffff' : '#111111';

  return (
    <section id="contact" className="py-24 px-8"
      style={{ background: isDark ? '#06030c' : '#fdf4ff', transition: 'background 0.3s ease' }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm tracking-[0.5em] mb-3" style={{ color: '#7c3aed' }}>GET IN TOUCH</p>
        <h2 className="text-center text-4xl font-bold mb-16 tracking-widest"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>CONTACT</h2>

        {sent ? (
          <div className="text-center py-16"
            style={{ border: `1px solid ${cardBorder}`, background: cardBg, borderRadius: '12px' }}>
            <p className="text-2xl mb-2" style={{ color: '#a78bfa' }}>✓</p>
            <p className="tracking-widest text-sm" style={{ color: isDark ? '#ffffff' : '#111111' }}>MESSAGE SENT</p>
            <p className="text-xs mt-2" style={{ color: isDark ? '#4c1d95' : '#7c3aed' }}>Thank you for reaching out</p>
            <button onClick={() => setSent(false)}
              className="mt-6 text-xs tracking-widest px-6 py-2 transition-all"
              style={{ border: `1px solid ${isDark ? '#3b0764' : '#a78bfa'}`, color: '#7c3aed', borderRadius: '9999px' }}>
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <div className="space-y-4"
            style={{ border: `1px solid ${cardBorder}`, padding: '2rem', background: cardBg, borderRadius: '12px' }}>
            <input value={name} onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{ background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: '9999px', color: inputText }} />
            <input value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{ background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: '9999px', color: inputText }} />
            <textarea value={message} onChange={e => setMessage(e.target.value)}
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 text-sm outline-none resize-none"
              style={{ background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: '12px', color: inputText }} />
            <button onClick={handleSubmit}
              className="w-full py-3 text-sm tracking-widest font-medium transition-all"
              style={{ background: isDark ? '#3b0764' : '#7c3aed', color: '#ffffff', border: '1px solid #7c3aed', borderRadius: '9999px' }}>
              SEND MESSAGE
            </button>
            <div className="flex justify-center gap-8 pt-4"
              style={{ borderTop: `1px solid ${cardBorder}` }}>
              <a href="https://instagram.com/mamad.Lami" target="_blank"
                className="text-xs tracking-widest px-6 py-2 transition-all"
                style={{ border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px' }}>
                INSTAGRAM
              </a>
              <a href="https://t.me/Mamad_12345" target="_blank"
                className="text-xs tracking-widest px-6 py-2 transition-all"
                style={{ border: `1px solid ${isDark ? '#3b0764' : '#a78bfa'}`, color: '#7c3aed', borderRadius: '9999px' }}>
                TELEGRAM
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
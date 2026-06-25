'use client';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = () => {
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm tracking-widest text-purple-400 uppercase mb-3">Don't Miss the Drop</p>
        <h2 className="text-3xl font-bold mb-4"
          style={{ color: isDark ? '#ffffff' : '#111111' }}>Join the Waitlist</h2>
        <p className="text-sm mb-8"
          style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#666666' }}>
          Be the first to know when VOID drops. No spam, just the signal.
        </p>

        {submitted ? (
          <div className="rounded-2xl px-6 py-5 font-mono tracking-widest text-sm"
            style={{ border: '1px solid rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}>
            ✓ YOU'RE IN THE VOID
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 outline-none transition-all"
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : '#f5f3ff',
                border: `1px solid ${isDark ? 'rgba(168,85,247,0.2)' : '#d8b4fe'}`,
                borderRadius: '12px',
                color: isDark ? '#ffffff' : '#111111',
              }}
            />
            <button onClick={handleSubmit}
              className="px-6 py-3 rounded-xl font-mono text-sm tracking-widest transition-all"
              style={{ background: '#7c3aed', color: '#ffffff' }}>
              JOIN
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
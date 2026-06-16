'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 px-8" style={{background: '#06030c'}}>
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm tracking-[0.5em] mb-3" style={{color: '#7c3aed'}}>GET IN TOUCH</p>
        <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-widest">CONTACT</h2>

        {sent ? (
          <div className="text-center py-16" style={{border: '1px solid #1e0a3c', background: '#0a0414', borderRadius: '12px'}}>
            <p className="text-2xl mb-2" style={{color: '#a78bfa'}}>✓</p>
            <p className="text-white tracking-widest text-sm">MESSAGE SENT</p>
            <p className="text-xs mt-2" style={{color: '#4c1d95'}}>Thank you for reaching out</p>
            <button onClick={() => setSent(false)} className="mt-6 text-xs tracking-widest px-6 py-2 transition-all"
              style={{border: '1px solid #3b0764', color: '#7c3aed', borderRadius: '9999px'}}>
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <div className="space-y-4" style={{border: '1px solid #1e0a3c', padding: '2rem', background: '#0a0414', borderRadius: '12px'}}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 text-sm text-white outline-none"
              style={{background: '#0d0520', border: '1px solid #2e1065', borderRadius: '9999px'}}
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm text-white outline-none"
              style={{background: '#0d0520', border: '1px solid #2e1065', borderRadius: '9999px'}}
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 text-sm text-white outline-none resize-none"
              style={{background: '#0d0520', border: '1px solid #2e1065', borderRadius: '12px'}}
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 text-sm tracking-widest font-medium transition-all"
              style={{background: '#3b0764', color: '#a78bfa', border: '1px solid #7c3aed', borderRadius: '9999px'}}>
              SEND MESSAGE
            </button>

            <div className="flex justify-center gap-8 pt-4" style={{borderTop: '1px solid #1e0a3c'}}>
              <a href="https://instagram.com/mamad.Lami" target="_blank"
                className="text-xs tracking-widest px-6 py-2 transition-all"
                style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>
                INSTAGRAM
              </a>
              <a href="https://t.me/Mamad_12345" target="_blank"
                className="text-xs tracking-widest px-6 py-2 transition-all"
                style={{border: '1px solid #3b0764', color: '#7c3aed', borderRadius: '9999px'}}>
                TELEGRAM
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
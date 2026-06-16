'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm tracking-widest text-purple-400 uppercase mb-3">Don't Miss the Drop</p>
        <h2 className="text-3xl font-bold text-white mb-4">Join the Waitlist</h2>
        <p className="text-white/50 text-sm mb-8">
          Be the first to know when VOID drops. No spam, just the signal.
        </p>

        {submitted ? (
          <div className="border border-cyan-500/30 bg-cyan-500/10 rounded-2xl px-6 py-5 text-cyan-400 font-mono tracking-widest text-sm">
            ✓ YOU'RE IN THE VOID
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-purple-500 transition-all"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-xl font-mono text-sm tracking-widest transition-all"
              style={{background: '#7c3aed', color: '#fff'}}
            >
              JOIN
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
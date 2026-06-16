'use client'

import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-09-16T00:00:00Z')

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = TARGET_DATE.getTime() - now.getTime()

      if (diff <= 0) {
        clearInterval(interval)
        return
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <p className="text-sm tracking-widest text-purple-400 uppercase">First Drop In</p>
      <div className="flex gap-4">
        {Object.entries(time).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center bg-white/5 border border-purple-500/20 rounded-xl px-5 py-4 min-w-[70px]">
            <span className="text-3xl font-bold text-white font-mono">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs text-purple-400 mt-1 capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
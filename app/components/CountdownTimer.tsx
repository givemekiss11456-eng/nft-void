'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const TARGET_DATE = new Date('2026-09-16T00:00:00Z');

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <p className="text-sm tracking-widest text-purple-400 uppercase">First Drop In</p>
      <div className="flex gap-4">
        {Object.entries(time).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-xl px-5 py-4 min-w-[70px]"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : '#f5f3ff',
              border: `1px solid ${isDark ? 'rgba(168,85,247,0.2)' : '#d8b4fe'}`,
              transition: 'background 0.3s ease',
            }}
          >
            <span
              className="text-3xl font-bold font-mono"
              style={{ color: isDark ? '#ffffff' : '#4c1d95' }}
            >
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs text-purple-400 mt-1 capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
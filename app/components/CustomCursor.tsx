'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // چک کن موبایله یا نه
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    let animFrame: number;
    const follow = () => {
      setRing(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      animFrame = requestAnimationFrame(follow);
    };
    animFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animFrame);
  }, [pos]);

  // روی موبایل نشون نده
  if (isMobile) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        left: pos.x - 6,
        top: pos.y - 6,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: '#8b5cf6',
        boxShadow: '0 0 10px #8b5cf6, 0 0 20px #7c3aed',
        pointerEvents: 'none',
        zIndex: 99999,
      }}/>
      <div style={{
        position: 'fixed',
        left: ring.x - 20,
        top: ring.y - 20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.8)',
        pointerEvents: 'none',
        zIndex: 99998,
      }}/>
    </>
  );
}
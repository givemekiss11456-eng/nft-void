'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteors: {
      x: number; y: number;
      length: number; speed: number;
      opacity: number; size: number;
      sparks: {x: number; y: number; vx: number; vy: number; life: number}[];
    }[] = [];

    for (let i = 0; i < 12; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 100 + 60,
        speed: Math.random() * 4 + 3,
        opacity: Math.random() * 0.8 + 0.5,
        size: Math.random() * 2 + 1,
        sparks: [],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach(m => {
        m.y += m.speed;
        m.x -= m.speed * 0.4;

        // sparks
        if (Math.random() > 0.3) {
          m.sparks.push({
            x: m.x + m.length * 0.3,
            y: m.y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
          });
        }

        m.sparks = m.sparks.filter(s => s.life > 0);
        m.sparks.forEach(s => {
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.05;
          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 100, 50, ${s.life})`;
          ctx.fill();
        });

        if (m.y > canvas.height + 100) {
          m.y = -m.length - 100;
          m.x = Math.random() * canvas.width + 100;
          m.sparks = [];
        }

        // trail
        const gradient = ctx.createLinearGradient(
          m.x, m.y - m.length,
          m.x + m.length * 0.4, m.y
        );
        gradient.addColorStop(0, `rgba(255,255,255,0)`);
        gradient.addColorStop(0.5, `rgba(180,120,255,${m.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(220,180,255,${m.opacity})`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y - m.length);
        ctx.lineTo(m.x + m.length * 0.4, m.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.size;
        ctx.stroke();

        // head glow
        ctx.beginPath();
        ctx.arc(m.x + m.length * 0.4, m.y, m.size + 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 255, ${m.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
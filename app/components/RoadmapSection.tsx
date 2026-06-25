'use client';
import { useTheme } from './ThemeProvider';

const phases = [
  {
    id: '01', title: 'Mint', status: 'upcoming',
    items: ['Launch first collection (10 NFTs)', 'OpenSea listing', 'Community launch on Discord'],
  },
  {
    id: '02', title: 'Drop 2', status: 'locked',
    items: ['Second collection drop', 'Holder-only exclusive content', 'Collab with other artists'],
  },
  {
    id: '03', title: 'Expansion', status: 'locked',
    items: ['Physical art prints for holders', 'Animated NFT series', 'DAO voting for next collection'],
  },
];

export default function RoadmapSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <p className="text-center text-sm tracking-widest text-purple-400 uppercase mb-3">The Plan</p>
      <h2 className="text-center text-3xl font-bold mb-12"
        style={{ color: isDark ? '#ffffff' : '#111111' }}>Roadmap</h2>

      <div className="flex flex-col gap-8">
        {phases.map((phase) => (
          <div key={phase.id}
            className="relative rounded-2xl p-6 backdrop-blur"
            style={{
              border: `1px solid ${isDark ? 'rgba(168,85,247,0.2)' : '#d8b4fe'}`,
              background: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
              transition: 'background 0.3s ease',
            }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-purple-400 text-sm">PHASE {phase.id}</span>
              <span className={`text-xs px-3 py-1 rounded-full border font-mono ${
                phase.status === 'upcoming'
                  ? 'border-cyan-400 text-cyan-400'
                  : isDark ? 'border-white/20 text-white/30' : 'border-gray-300 text-gray-400'
              }`}>
                {phase.status === 'upcoming' ? 'COMING SOON' : 'LOCKED'}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4"
              style={{ color: isDark ? '#ffffff' : '#111111' }}>{phase.title}</h3>
            <ul className="flex flex-col gap-2">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#555555' }}>
                  <span className="text-purple-400 mt-0.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
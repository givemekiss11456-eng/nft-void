'use client'

const phases = [
  {
    id: '01',
    title: 'Mint',
    status: 'upcoming',
    items: [
      'Launch first collection (10 NFTs)',
      'OpenSea listing',
      'Community launch on Discord',
    ],
  },
  {
    id: '02',
    title: 'Drop 2',
    status: 'locked',
    items: [
      'Second collection drop',
      'Holder-only exclusive content',
      'Collab with other artists',
    ],
  },
  {
    id: '03',
    title: 'Expansion',
    status: 'locked',
    items: [
      'Physical art prints for holders',
      'Animated NFT series',
      'DAO voting for next collection',
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <p className="text-center text-sm tracking-widest text-purple-400 uppercase mb-3">The Plan</p>
      <h2 className="text-center text-3xl font-bold text-white mb-12">Roadmap</h2>

      <div className="flex flex-col gap-8">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="relative border border-purple-500/20 bg-white/5 rounded-2xl p-6 backdrop-blur"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-purple-400 text-sm">PHASE {phase.id}</span>
              <span
                className={`text-xs px-3 py-1 rounded-full border font-mono ${
                  phase.status === 'upcoming'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-white/20 text-white/30'
                }`}
              >
                {phase.status === 'upcoming' ? 'COMING SOON' : 'LOCKED'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
            <ul className="flex flex-col gap-2">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-purple-400 mt-0.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
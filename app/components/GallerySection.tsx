'use client';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useTheme } from './ThemeProvider';

const nfts = [
  { id: '1', title: 'VOID #001', price: '0.5 ETH', image: 'https://picsum.photos/400/400?random=1', alt: 'VOID #001 - Cyberpunk NFT artwork featuring neon-lit digital character from NFT VOID collection' },
  { id: '2', title: 'VOID #002', price: '0.8 ETH', image: 'https://picsum.photos/400/400?random=2', alt: 'VOID #002 - Cyberpunk NFT digital art with futuristic neon aesthetic from NFT VOID collection' },
  { id: '3', title: 'VOID #003', price: '1.2 ETH', image: 'https://picsum.photos/400/400?random=3', alt: 'VOID #003 - AI-generated cyberpunk NFT artwork from NFT VOID gallery' },
  { id: '4', title: 'VOID #004', price: '0.6 ETH', image: 'https://picsum.photos/400/400?random=4', alt: 'VOID #004 - Dark cyberpunk digital art NFT from NFT VOID collection' },
  { id: '5', title: 'VOID #005', price: '2.0 ETH', image: 'https://picsum.photos/400/400?random=5', alt: 'VOID #005 - Rare cyberpunk NFT artwork, the crown jewel of NFT VOID collection' },
  { id: '6', title: 'VOID #006', price: '1.5 ETH', image: 'https://picsum.photos/400/400?random=6', alt: 'VOID #006 - Cyberpunk NFT digital collectible from NFT VOID universe' },
];

export default function GallerySection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="gallery"
      className="py-24 px-8"
      style={{ background: isDark ? '#05030a' : '#f5f3ff' }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-[0.5em] mb-3" style={{ color: '#7c3aed' }}>COLLECTION</p>
          <h2
            className="text-center text-5xl font-bold mb-16 tracking-widest"
            style={{ color: isDark ? '#ffffff' : '#111111' }}
          >
            THE GALLERY
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <ScrollReveal key={nft.id} delay={index * 0.1}>
              <Link href={`/nft/${nft.id}`}>
                <div
                  className="group cursor-pointer"
                  style={{
                    border: `1px solid ${isDark ? '#1e0a3c' : '#d8b4fe'}`,
                    background: isDark ? '#0a0414' : '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'background 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <div className="overflow-hidden relative" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src={nft.image}
                      alt={nft.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110 glitch-img"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-bold text-lg tracking-widest mb-2"
                      style={{ color: isDark ? '#ffffff' : '#111111' }}
                    >
                      {nft.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: '#a78bfa' }}>{nft.price}</span>
                      <span
                        className="text-xs tracking-widest px-4 py-2 transition-all"
                        style={{
                          border: '1px solid #7c3aed',
                          color: '#a78bfa',
                          borderRadius: '9999px',
                        }}
                      >
                        VIEW DETAILS
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
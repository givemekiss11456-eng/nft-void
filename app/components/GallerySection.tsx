'use client';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const nfts = [
  { id: '1', title: 'VOID #001', price: '0.5 ETH', image: 'https://picsum.photos/400/400?random=1' },
  { id: '2', title: 'VOID #002', price: '0.8 ETH', image: 'https://picsum.photos/400/400?random=2' },
  { id: '3', title: 'VOID #003', price: '1.2 ETH', image: 'https://picsum.photos/400/400?random=3' },
  { id: '4', title: 'VOID #004', price: '0.6 ETH', image: 'https://picsum.photos/400/400?random=4' },
  { id: '5', title: 'VOID #005', price: '2.0 ETH', image: 'https://picsum.photos/400/400?random=5' },
  { id: '6', title: 'VOID #006', price: '1.5 ETH', image: 'https://picsum.photos/400/400?random=6' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-8" style={{background: '#05030a'}}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-[0.5em] mb-3" style={{color: '#7c3aed'}}>COLLECTION</p>
          <h2 className="text-center text-5xl font-bold mb-16 text-white tracking-widest">THE GALLERY</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <ScrollReveal key={nft.id} delay={index * 0.1}>
              <Link href={`/nft/${nft.id}`}>
                <div className="group cursor-pointer" style={{border: '1px solid #1e0a3c', background: '#0a0414', borderRadius: '12px', overflow: 'hidden'}}>
                  <div className="overflow-hidden">
                    <img src={nft.image} alt={nft.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 glitch-img"/>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg tracking-widest mb-2">{nft.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{color: '#a78bfa'}}>{nft.price}</span>
                      <span className="text-xs tracking-widest px-4 py-2 transition-all"
                        style={{border: '1px solid #7c3aed', color: '#a78bfa', borderRadius: '9999px'}}>
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
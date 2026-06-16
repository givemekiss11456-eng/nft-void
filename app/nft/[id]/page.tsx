'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const nfts = [
  { id: '1', title: 'VOID #001', price: '0.5 ETH', image: 'https://picsum.photos/800/800?random=1', description: 'The first piece of the NFT VOID universe. A journey into the unknown.', story: 'Born from the void, this piece represents the beginning of an endless digital journey. The darkness holds secrets waiting to be discovered.' },
  { id: '2', title: 'VOID #002', price: '0.8 ETH', image: 'https://picsum.photos/800/800?random=2', description: 'A deeper dive into the cyberpunk universe.', story: 'The second chapter unfolds. Neon lights pierce through the darkness as the character begins to take shape.' },
  { id: '3', title: 'VOID #003', price: '1.2 ETH', image: 'https://picsum.photos/800/800?random=3', description: 'The story evolves with stunning detail.', story: 'In the third vision, the universe expands. New dimensions are revealed as the void grows deeper.' },
  { id: '4', title: 'VOID #004', price: '0.6 ETH', image: 'https://picsum.photos/800/800?random=4', description: 'Darkness and light collide.', story: 'A clash between worlds. The digital and the organic merge into something extraordinary.' },
  { id: '5', title: 'VOID #005', price: '2.0 ETH', image: 'https://picsum.photos/800/800?random=5', description: 'The rarest piece of the collection.', story: 'The crown jewel of the VOID collection. This piece holds the deepest secrets of the universe.' },
  { id: '6', title: 'VOID #006', price: '1.5 ETH', image: 'https://picsum.photos/800/800?random=6', description: 'A new chapter begins.', story: 'As the collection grows, new stories emerge. This piece marks a turning point in the VOID universe.' },
];

export default function NFTDetail() {
  const params = useParams();
  const nft = nfts.find(n => n.id === params.id);

  if (!nft) return (
    <div className="min-h-screen flex items-center justify-center" style={{background: '#050505'}}>
      <p className="text-white">NFT not found</p>
    </div>
  );

  return (
    <div className="min-h-screen" style={{background: '#050505'}}>
      
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between"
        style={{background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #3b0764'}}>
        <Link href="/" className="text-white text-sm tracking-widest hover:text-purple-400">← BACK TO GALLERY</Link>
        <span className="text-sm tracking-widest" style={{color: '#a78bfa'}}>{nft.title}</span>
      </nav>

      <div className="pt-24 pb-16 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <img src={nft.image} alt={nft.title} className="w-full" style={{border: '1px solid #1e0a3c'}}/>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-[0.5em] mb-2" style={{color: '#7c3aed'}}>NFT VOID COLLECTION</p>
              <h1 className="text-5xl font-bold text-white tracking-widest mb-4">{nft.title}</h1>
              <p className="text-2xl font-bold" style={{color: '#a78bfa'}}>{nft.price}</p>
            </div>

            <div style={{borderTop: '1px solid #1e0a3c', paddingTop: '2rem'}}>
              <p className="text-sm tracking-widest mb-3" style={{color: '#7c3aed'}}>DESCRIPTION</p>
              <p className="text-gray-300 leading-relaxed">{nft.description}</p>
            </div>

            <div style={{borderTop: '1px solid #1e0a3c', paddingTop: '2rem'}}>
              <p className="text-sm tracking-widest mb-3" style={{color: '#7c3aed'}}>THE STORY</p>
              <p className="text-gray-400 leading-relaxed">{nft.story}</p>
            </div>

            <div style={{borderTop: '1px solid #1e0a3c', paddingTop: '2rem'}}>
              <a href="#" className="w-full block text-center py-4 text-sm tracking-widest transition-all"
                style={{border: '1px solid #7c3aed', color: '#a78bfa'}}>
                BUY ON OPENSEA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
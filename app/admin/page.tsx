'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const ADMIN_PASSWORD = 'nftvoid2026'

export default function AdminPanel() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [nfts, setNfts] = useState<any[]>([])
  const [comments, setComments] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState<'nfts' | 'comments'>('nfts')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true)
      fetchData()
    } else {
      alert('Wrong password!')
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const { data: nftData } = await supabase.from('nfts').select('*').order('created_at', { ascending: false })
    const { data: commentData } = await supabase.from('comments').select('*').order('created_at', { ascending: false })
    setNfts(nftData || [])
    setComments(commentData || [])
    setLoading(false)
  }

  const deleteNft = async (id: string) => {
    if (!confirm('Delete this NFT?')) return
    await supabase.from('nfts').delete().eq('id', id)
    fetchData()
  }

  const deleteComment = async (id: string) => {
    await supabase.from('comments').delete().eq('id', id)
    fetchData()
  }

  const approveComment = async (id: string) => {
    await supabase.from('comments').update({ approved: true }).eq('id', id)
    fetchData()
  }

  if (!loggedIn) return (
    <div className="min-h-screen flex items-center justify-center" style={{background: '#050505'}}>
      <div className="p-8 rounded-2xl" style={{border: '1px solid #3b0764', background: '#0a0414', minWidth: '320px'}}>
        <h1 className="text-white text-2xl font-bold tracking-widest mb-6 text-center">ADMIN</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-mono text-sm tracking-widest"
          style={{background: '#7c3aed', color: '#fff'}}
        >
          LOGIN
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen p-8" style={{background: '#050505'}}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-3xl font-bold tracking-widest mb-8">NFT VOID — Admin</h1>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab('nfts')}
            className="px-6 py-2 rounded-xl font-mono text-sm tracking-widest"
            style={{background: activeTab === 'nfts' ? '#7c3aed' : 'transparent', border: '1px solid #7c3aed', color: '#fff'}}>
            NFTs
          </button>
          <button onClick={() => setActiveTab('comments')}
            className="px-6 py-2 rounded-xl font-mono text-sm tracking-widest"
            style={{background: activeTab === 'comments' ? '#7c3aed' : 'transparent', border: '1px solid #7c3aed', color: '#fff'}}>
            Comments
          </button>
        </div>

        {loading && <p className="text-purple-400">Loading...</p>}

        {activeTab === 'nfts' && (
          <div className="flex flex-col gap-4">
            {nfts.map(nft => (
              <div key={nft.id} className="p-4 rounded-xl flex items-center justify-between"
                style={{border: '1px solid #1e0a3c', background: '#0a0414'}}>
                <div>
                  <p className="text-white font-bold">{nft.title}</p>
                  <p className="text-purple-400 text-sm">{nft.price} · 👁 {nft.views} views · 🖱 {nft.clicks} clicks</p>
                </div>
                <button onClick={() => deleteNft(nft.id)}
                  className="px-4 py-2 rounded-lg text-sm font-mono"
                  style={{background: '#ff2d9a22', border: '1px solid #ff2d9a', color: '#ff2d9a'}}>
                  DELETE
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="flex flex-col gap-4">
            {comments.map(comment => (
              <div key={comment.id} className="p-4 rounded-xl"
                style={{border: '1px solid #1e0a3c', background: '#0a0414'}}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-bold">{comment.name}</p>
                  <div className="flex gap-2">
                    {!comment.approved && (
                      <button onClick={() => approveComment(comment.id)}
                        className="px-3 py-1 rounded-lg text-xs font-mono"
                        style={{background: '#34e3a122', border: '1px solid #34e3a1', color: '#34e3a1'}}>
                        APPROVE
                      </button>
                    )}
                    <button onClick={() => deleteComment(comment.id)}
                      className="px-3 py-1 rounded-lg text-xs font-mono"
                      style={{background: '#ff2d9a22', border: '1px solid #ff2d9a', color: '#ff2d9a'}}>
                      DELETE
                    </button>
                  </div>
                </div>
                <p className="text-white/60 text-sm">{comment.message}</p>
                <p className="text-purple-400 text-xs mt-1">{comment.approved ? '✓ Approved' : '⏳ Pending'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
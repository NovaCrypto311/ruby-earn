'use client'

import { Copy, Users, Gift, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function FriendPage() {
  const [copied, setCopied] = useState(false)
  const referralCode = 'RUBY-novacrypto311'

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-4 space-y-4">
      {/* Header */}
      <div className="text-center py-4">
        <div className="text-6xl mb-3">👥</div>
        <h2 className="text-white font-black text-3xl">Invite Friends</h2>
        <p className="text-gray-400 text-sm mt-1">Earn rewards for every friend you invite</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Invited', value: '0', icon: '👤' },
          { label: 'Earned', value: '0 💎', icon: '💰' },
          { label: 'Level', value: '1', icon: '⭐' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-3 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a0020, #200028)',
              border: '1px solid #3d0040'
            }}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-white font-bold text-base">{stat.value}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Referral Code */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: 'linear-gradient(135deg, #1a0020, #200028)',
          border: '1px solid #3d0040'
        }}
      >
        <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Your Referral Code
        </p>
        <div className="flex items-center gap-3">
          <div
            className="flex-1 px-4 py-3 rounded-xl font-mono font-bold text-[#FF1870] text-sm"
            style={{ background: 'rgba(255,24,112,0.1)', border: '1px dashed #FF1870' }}
          >
            {referralCode}
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-3 rounded-xl font-bold text-sm text-white transition-all active:scale-95"
            style={{ background: copied ? '#00E676' : '#FF1870', color: copied ? 'black' : 'white' }}
          >
            {copied ? '✓' : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* Reward tiers */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Gift size={16} color="#FF1870" />
          <p className="text-white font-bold text-sm uppercase tracking-wide">Reward Tiers</p>
        </div>

        {[
          { invites: '1-5 invites', reward: '+2 RUBY each', color: '#FF1870' },
          { invites: '6-20 invites', reward: '+5 RUBY each', color: '#ff8c00' },
          { invites: '21+ invites', reward: '+10 RUBY each', color: '#FFD700' },
        ].map((tier) => (
          <div
            key={tier.invites}
            className="flex items-center justify-between p-4 rounded-2xl mb-2"
            style={{
              background: 'linear-gradient(135deg, #1a0020, #200028)',
              border: `1px solid ${tier.color}40`
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: tier.color }} />
              <span className="text-white text-sm font-medium">{tier.invites}</span>
            </div>
            <span className="font-bold text-sm" style={{ color: tier.color }}>{tier.reward}</span>
          </div>
        ))}
      </div>

      {/* Share Button */}
      <button
        className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #FF1870, #cc1258)',
          boxShadow: '0 4px 20px rgba(255, 24, 112, 0.4)'
        }}
      >
        Share Invite Link 🚀
      </button>
    </div>
  )
}

'use client'

import { UserPlus, ChevronDown, MoreVertical, X } from 'lucide-react'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 px-4 py-3" style={{ background: '#0d0010' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <X size={22} />
          </button>
          <h1 className="text-white font-bold text-lg tracking-wider">RUBY EARN</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={22} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <MoreVertical size={22} />
          </button>
        </div>
      </div>

      {/* Balance + Invite Row */}
      <div className="flex items-center justify-between">
        {/* Mini Balance */}
        <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: '#1a0020', border: '1px solid #3d0040' }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: '#FF1870' }}>
            💎
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-none">BALANCE</div>
            <div className="text-gray-300 text-xs mt-0.5">
              <span className="text-white font-semibold">15</span>
              <span className="text-gray-400 ml-1">≈ $0.0015</span>
            </div>
          </div>
        </div>

        {/* Invite Button */}
        <button
          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all active:scale-95 glow-pink"
          style={{ background: '#FF1870' }}
        >
          <UserPlus size={16} />
          Invite
        </button>
      </div>
    </div>
  )
}

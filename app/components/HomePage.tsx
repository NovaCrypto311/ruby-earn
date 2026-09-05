'use client'

import { Zap, Download, Volume2, ChevronRight, Target, Ticket, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="py-4 space-y-4">

      {/* Total Balance Card */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0020 0%, #250030 100%)',
          border: '1px solid #3d0040'
        }}
      >
        {/* Background glow */}
        <div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FF1870, transparent)' }}
        />

        <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Total Balance
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-black text-6xl leading-none mb-3">15</div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="text-[#FF1870]">💎</span>
                <span className="text-white font-semibold text-sm">RUBY</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{ background: 'rgba(0, 230, 118, 0.15)', border: '1px solid rgba(0,230,118,0.3)' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse-pink inline-block" />
                <span className="text-[#00E676] font-semibold text-xs">$0.0015 USDT</span>
              </div>
            </div>
          </div>

          {/* Ruby gem */}
          <div className="text-7xl animate-float select-none">💎</div>
        </div>
      </div>

      {/* Earn & Withdraw Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #FF1870, #cc1258)',
            boxShadow: '0 4px 20px rgba(255, 24, 112, 0.4)'
          }}
        >
          <Zap size={20} fill="white" />
          EARN
        </button>

        <button
          className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-black text-base transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #00E676, #00b85c)',
            boxShadow: '0 4px 20px rgba(0, 230, 118, 0.4)'
          }}
        >
          <Download size={20} />
          WITHDRAW
        </button>
      </div>

      {/* Public Payout Channel */}
      <div
        className="flex items-center justify-between p-4 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a0020, #200028)',
          border: '1px solid #3d0040'
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255, 24, 112, 0.2)' }}
          >
            <Volume2 size={18} color="#FF1870" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Public Payout Channel</p>
            <p className="text-gray-400 text-xs mt-0.5">See live withdrawal proofs 🍀</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-[#FF1870] font-bold text-sm">
          JOIN
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Quick Links */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF1870]" />
          <p className="text-white font-bold text-sm tracking-wide uppercase">Quick Links</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Game */}
          <div
            className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #1a0020, #200028)',
              border: '1px solid #3d0040'
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255, 24, 112, 0.2)' }}
            >
              <Target size={22} color="#FF1870" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Game</p>
              <p className="text-gray-400 text-xs">Play &amp; win</p>
            </div>
          </div>

          {/* Promo */}
          <div
            className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #1a0020, #200028)',
              border: '1px solid #3d0040'
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(180, 80, 0, 0.3)' }}
            >
              <Ticket size={22} color="#ff8c00" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Promo</p>
              <p className="text-gray-400 text-xs">Redeem code</p>
            </div>
          </div>

          {/* Refer */}
          <div
            className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer active:scale-95 transition-transform col-span-2"
            style={{
              background: 'linear-gradient(135deg, #1a0020, #200028)',
              border: '1px solid #3d0040'
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0, 150, 80, 0.3)' }}
            >
              <Users size={22} color="#00E676" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Refer</p>
              <p className="text-gray-400 text-xs">Invite frens</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

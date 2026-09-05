'use client'

import { Wallet, CheckCircle, ArrowUpRight, ExternalLink } from 'lucide-react'

export default function WalletPage() {
  return (
    <div className="py-4 space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#FF1870] text-xs font-bold tracking-widest uppercase">Ruby Vault</p>
          <h2 className="text-white font-black text-4xl mt-1">Withdraw</h2>
        </div>
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(0, 230, 118, 0.15)', border: '1px solid rgba(0,230,118,0.4)' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          <span className="text-[#00E676] text-xs font-bold">LIVE</span>
        </div>
      </div>

      {/* Balance Card */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF1870 0%, #cc1258 100%)',
          boxShadow: '0 8px 30px rgba(255, 24, 112, 0.4)'
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, white, transparent)' }}
        />
        <div
          className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10"
          style={{ background: 'white' }}
        />

        <p className="text-pink-100 text-xs font-semibold tracking-widest uppercase mb-2">
          Available Balance
        </p>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-black text-5xl">0.0015</span>
              <span className="text-pink-100 font-bold text-lg">USDT</span>
            </div>
            <p className="text-pink-200 text-sm">from <span className="font-bold text-white">15</span> RUBY</p>
          </div>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          >
            💎
          </div>
        </div>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            MIN 400
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            3 INVITES
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <CheckCircle size={12} className="text-green-300" />
            NO PENDING
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <span>0/3 ADS</span>
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Payment Method
        </p>

        <div
          className="flex items-center justify-between p-4 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #1a0020, #200028)',
            border: '2px solid #FF1870'
          }}
        >
          <div className="flex items-center gap-3">
            {/* USDT Logo */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
              style={{ background: 'linear-gradient(135deg, #26a17b, #1a7a5e)', color: 'white' }}
            >
              ₮
            </div>
            <div>
              <p className="text-white font-bold text-base">USDT</p>
              <p className="text-gray-400 text-xs">BNB Smart Chain (BEP20)</p>
            </div>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: '#FF1870' }}
          >
            <CheckCircle size={18} color="white" />
          </div>
        </div>
      </div>

      {/* Destination */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
            Destination
          </p>
          <span
            className="text-xs font-bold px-2 py-1 rounded-md"
            style={{ background: 'rgba(255,24,112,0.2)', color: '#FF1870' }}
          >
            BEP20
          </span>
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-[#FF1870] text-sm transition-all active:scale-95"
          style={{
            background: 'rgba(255,24,112,0.08)',
            border: '1px dashed #FF1870'
          }}
        >
          <Wallet size={18} />
          LINK USDT WALLET
          <ExternalLink size={14} />
        </button>
      </div>

    </div>
  )
}

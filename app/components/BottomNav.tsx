'use client'

import { Home, Zap, Users, Wallet } from 'lucide-react'

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'earn', label: 'Earn', icon: Zap },
    { id: 'friend', label: 'Friend', icon: Users },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
  ]

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50"
      style={{ background: '#0d0010', borderTop: '1px solid #2a0030' }}
    >
      <div className="flex items-end justify-around px-2 py-2">
        {/* Home */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex flex-col items-center gap-1 px-3 py-2"
        >
          <Home
            size={22}
            color={activeTab === 'home' ? '#FF1870' : '#6b7280'}
            strokeWidth={activeTab === 'home' ? 2.5 : 1.5}
          />
          <span className={`text-xs font-medium ${activeTab === 'home' ? 'text-[#FF1870]' : 'text-gray-500'}`}>
            Home
          </span>
        </button>

        {/* Earn */}
        <button
          onClick={() => setActiveTab('earn')}
          className="flex flex-col items-center gap-1 px-3 py-2"
        >
          <Zap
            size={22}
            color={activeTab === 'earn' ? '#FF1870' : '#6b7280'}
            strokeWidth={activeTab === 'earn' ? 2.5 : 1.5}
          />
          <span className={`text-xs font-medium ${activeTab === 'earn' ? 'text-[#FF1870]' : 'text-gray-500'}`}>
            Earn
          </span>
        </button>

        {/* Play - Center Big Button */}
        <button
          onClick={() => setActiveTab('play')}
          className="flex flex-col items-center -mt-6"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform active:scale-95"
            style={{
              background: activeTab === 'play'
                ? 'linear-gradient(135deg, #FF1870, #ff5c9a)'
                : 'linear-gradient(135deg, #cc1458, #FF1870)',
              boxShadow: '0 0 20px rgba(255, 24, 112, 0.5)',
              border: '3px solid #0d0010'
            }}
          >
            💎
          </div>
          <span className={`text-xs font-medium mt-1 ${activeTab === 'play' ? 'text-[#FF1870]' : 'text-gray-400'}`}>
            Play
          </span>
        </button>

        {/* Friend */}
        <button
          onClick={() => setActiveTab('friend')}
          className="flex flex-col items-center gap-1 px-3 py-2"
        >
          <Users
            size={22}
            color={activeTab === 'friend' ? '#FF1870' : '#6b7280'}
            strokeWidth={activeTab === 'friend' ? 2.5 : 1.5}
          />
          <span className={`text-xs font-medium ${activeTab === 'friend' ? 'text-[#FF1870]' : 'text-gray-500'}`}>
            Friend
          </span>
        </button>

        {/* Wallet */}
        <button
          onClick={() => setActiveTab('wallet')}
          className="flex flex-col items-center gap-1 px-3 py-2"
        >
          <Wallet
            size={22}
            color={activeTab === 'wallet' ? '#FF1870' : '#6b7280'}
            strokeWidth={activeTab === 'wallet' ? 2.5 : 1.5}
          />
          <span className={`text-xs font-medium ${activeTab === 'wallet' ? 'text-[#FF1870]' : 'text-gray-500'}`}>
            Wallet
          </span>
        </button>
      </div>
    </div>
  )
}

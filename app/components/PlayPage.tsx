'use client'

import { Play, Gamepad2, Trophy, Star } from 'lucide-react'

export default function PlayPage() {
  const games = [
    { name: 'Ruby Spin', desc: 'Spin & earn RUBY', icon: '🎰', reward: '+5 RUBY' },
    { name: 'Lucky Draw', desc: 'Try your luck', icon: '🎯', reward: '+10 RUBY' },
    { name: 'Quiz Game', desc: 'Answer & win', icon: '🧠', reward: '+3 RUBY' },
    { name: 'Scratch Card', desc: 'Scratch to reveal', icon: '🎟️', reward: '+8 RUBY' },
  ]

  return (
    <div className="py-4 space-y-4">
      {/* Header */}
      <div className="text-center py-4">
        <div className="text-6xl mb-3 animate-float">💎</div>
        <h2 className="text-white font-black text-3xl">Play & Win</h2>
        <p className="text-gray-400 text-sm mt-1">Play games to earn more RUBY</p>
      </div>

      {/* Daily Bonus */}
      <div
        className="rounded-2xl p-4 flex items-center justify-between"
        style={{
          background: 'linear-gradient(135deg, #1a1a00, #2a2200)',
          border: '1px solid #554400'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎁</div>
          <div>
            <p className="text-white font-bold">Daily Bonus</p>
            <p className="text-yellow-400 text-xs">Claim your daily reward</p>
          </div>
        </div>
        <button
          className="px-4 py-2 rounded-xl font-bold text-sm text-black"
          style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
        >
          CLAIM
        </button>
      </div>

      {/* Games Grid */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Gamepad2 size={16} color="#FF1870" />
          <p className="text-white font-bold text-sm tracking-wide uppercase">Available Games</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {games.map((game) => (
            <div
              key={game.name}
              className="rounded-2xl p-4 cursor-pointer active:scale-95 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #1a0020, #200028)',
                border: '1px solid #3d0040'
              }}
            >
              <div className="text-4xl mb-2">{game.icon}</div>
              <p className="text-white font-bold text-sm">{game.name}</p>
              <p className="text-gray-400 text-xs mt-0.5">{game.desc}</p>
              <div
                className="mt-3 px-2 py-1 rounded-lg inline-block"
                style={{ background: 'rgba(255, 24, 112, 0.2)' }}
              >
                <span className="text-[#FF1870] text-xs font-bold">{game.reward}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: 'linear-gradient(135deg, #1a0020, #200028)',
          border: '1px solid #3d0040'
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Trophy size={16} color="#FFD700" />
          <p className="text-white font-bold text-sm">Top Players</p>
        </div>
        {[
          { rank: 1, name: 'Ruby King', points: '2,450', medal: '🥇' },
          { rank: 2, name: 'DiamondX', points: '1,890', medal: '🥈' },
          { rank: 3, name: 'GemMaster', points: '1,230', medal: '🥉' },
        ].map((player) => (
          <div key={player.rank} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{player.medal}</span>
              <span className="text-white text-sm font-medium">{player.name}</span>
            </div>
            <span className="text-[#FF1870] text-sm font-bold">{player.points} 💎</span>
          </div>
        ))}
      </div>
    </div>
  )
}

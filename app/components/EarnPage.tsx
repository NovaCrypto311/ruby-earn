'use client'

import { Play, Clock, CheckCircle } from 'lucide-react'

export default function EarnPage() {
  const tasks = [
    { id: 1, title: 'Watch an Ad', desc: 'Watch a 30s video', reward: '+2 RUBY', icon: '▶️', done: false },
    { id: 2, title: 'Daily Check-in', desc: 'Login every day', reward: '+1 RUBY', icon: '📅', done: true },
    { id: 3, title: 'Follow on Twitter', desc: '@RubyEarnApp', reward: '+5 RUBY', icon: '🐦', done: false },
    { id: 4, title: 'Join Telegram', desc: 'Official channel', reward: '+5 RUBY', icon: '✈️', done: false },
    { id: 5, title: 'Rate the App', desc: 'Give us 5 stars', reward: '+10 RUBY', icon: '⭐', done: false },
    { id: 6, title: 'Share on Social', desc: 'Share your earnings', reward: '+3 RUBY', icon: '📱', done: false },
  ]

  return (
    <div className="py-4 space-y-4">
      {/* Header */}
      <div>
        <p className="text-[#FF1870] text-xs font-bold tracking-widest uppercase">Daily Tasks</p>
        <h2 className="text-white font-black text-3xl mt-1">Earn RUBY</h2>
        <p className="text-gray-400 text-sm mt-1">Complete tasks to earn more rewards</p>
      </div>

      {/* Progress */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: 'linear-gradient(135deg, #1a0020, #200028)',
          border: '1px solid #3d0040'
        }}
      >
        <div className="flex justify-between mb-2">
          <span className="text-white text-sm font-semibold">Daily Progress</span>
          <span className="text-[#FF1870] text-sm font-bold">1/6 tasks</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: '#3d0040' }}>
          <div
            className="h-2 rounded-full"
            style={{
              width: '16.6%',
              background: 'linear-gradient(90deg, #FF1870, #ff5c9a)'
            }}
          />
        </div>
        <p className="text-gray-400 text-xs mt-2">Complete all tasks to earn bonus 🎁</p>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 rounded-2xl transition-all"
            style={{
              background: task.done
                ? 'linear-gradient(135deg, #001a10, #002018)'
                : 'linear-gradient(135deg, #1a0020, #200028)',
              border: task.done ? '1px solid #00E67640' : '1px solid #3d0040',
              opacity: task.done ? 0.7 : 1
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: task.done ? 'rgba(0,230,118,0.15)' : 'rgba(255,24,112,0.15)'
                }}
              >
                {task.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{task.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{task.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <span
                className="font-bold text-xs px-2 py-1 rounded-lg"
                style={{
                  background: task.done ? 'rgba(0,230,118,0.15)' : 'rgba(255,24,112,0.15)',
                  color: task.done ? '#00E676' : '#FF1870'
                }}
              >
                {task.reward}
              </span>
              {task.done ? (
                <CheckCircle size={20} color="#00E676" />
              ) : (
                <button
                  className="w-8 h-8 rounded-lg flex items-center justify-center active:scale-95 transition-transform"
                  style={{ background: '#FF1870' }}
                >
                  <Play size={14} color="white" fill="white" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

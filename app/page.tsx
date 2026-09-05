'use client'

// Ruby Earn Web App - Powered by Next.js & Supabase
import { useState } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import HomePage from './components/HomePage'
import EarnPage from './components/EarnPage'
import PlayPage from './components/PlayPage'
import FriendPage from './components/FriendPage'
import WalletPage from './components/WalletPage'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <HomePage />
      case 'earn': return <EarnPage />
      case 'play': return <PlayPage />
      case 'friend': return <FriendPage />
      case 'wallet': return <WalletPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0d0010', maxWidth: '430px', margin: '0 auto' }}>
      <Header />
      <main className="flex-1 overflow-y-auto pb-24 px-4">
        {renderPage()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

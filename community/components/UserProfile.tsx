"use client"

import React, { useState } from "react"

type ContributionType = "code" | "writing" | "support" | "event" | "design" | "translation"
type BadgeRarity = "legendary" | "diamond" | "gold" | "silver" | "bronze"

interface Badge {
  id: string
  type: ContributionType
  rarity: BadgeRarity
  title: string
  description: string
  icon: string
  mintedAt: Date
  points: number
}

interface UserStats {
  username: string
  wallet: string
  totalPoints: number
  totalContributions: number
  joinedDate: Date
  badges: Badge[]
}

const BADGE_RARITY_COLORS: Record<BadgeRarity, { bg: string; border: string; glow: string }> = {
  legendary: { bg: "from-yellow-600 to-orange-600", border: "border-yellow-500", glow: "shadow-yellow-500/50" },
  diamond: { bg: "from-cyan-600 to-blue-600", border: "border-cyan-500", glow: "shadow-cyan-500/50" },
  gold: { bg: "from-yellow-500 to-amber-500", border: "border-yellow-400", glow: "shadow-yellow-400/50" },
  silver: { bg: "from-gray-400 to-slate-400", border: "border-gray-300", glow: "shadow-gray-400/50" },
  bronze: { bg: "from-orange-600 to-red-600", border: "border-orange-500", glow: "shadow-orange-500/50" },
}

const CONTRIBUTION_ICONS: Record<ContributionType, string> = {
  code: "💻",
  writing: "✍️",
  support: "🤝",
  event: "🎯",
  design: "🎨",
  translation: "🌍",
}

// Mock user data
const MOCK_USER: UserStats = {
  username: "Alice Developer",
  wallet: "0x1234567890abcdef1234567890abcdef12345678",
  totalPoints: 1250,
  totalContributions: 12,
  joinedDate: new Date("2024-03-15"),
  badges: [
    {
      id: "1",
      type: "code",
      rarity: "diamond",
      title: "Security Expert",
      description: "Fixed 5+ critical security issues",
      icon: "💻",
      mintedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      points: 100,
    },
    {
      id: "2",
      type: "writing",
      rarity: "gold",
      title: "Technical Writer",
      description: "Published 3 comprehensive tutorials",
      icon: "✍️",
      mintedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
      points: 50,
    },
    {
      id: "3",
      type: "support",
      rarity: "gold",
      title: "Community Helper",
      description: "Helped 20+ community members",
      icon: "🤝",
      mintedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
      points: 30,
    },
    {
      id: "4",
      type: "event",
      rarity: "silver",
      title: "Hackathon Participant",
      description: "Participated in IOTA Hackathon 2024",
      icon: "🎯",
      mintedAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000),
      points: 40,
    },
    {
      id: "5",
      type: "design",
      rarity: "gold",
      title: "Designer",
      description: "Created UI components for community",
      icon: "🎨",
      mintedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
      points: 60,
    },
    {
      id: "6",
      type: "code",
      rarity: "silver",
      title: "Bug Fixer",
      description: "Fixed 3 critical bugs",
      icon: "💻",
      mintedAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
      points: 100,
    },
  ],
}

export default function UserProfile() {
  const [user] = useState<UserStats>(MOCK_USER)
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)

  // Group badges by rarity
  const badgesByRarity: Record<BadgeRarity, Badge[]> = {
    legendary: user.badges.filter((b) => b.rarity === "legendary"),
    diamond: user.badges.filter((b) => b.rarity === "diamond"),
    gold: user.badges.filter((b) => b.rarity === "gold"),
    silver: user.badges.filter((b) => b.rarity === "silver"),
    bronze: user.badges.filter((b) => b.rarity === "bronze"),
  }

  // Stats by contribution type
  const statsbyType = {
    code: user.badges.filter((b) => b.type === "code").length,
    writing: user.badges.filter((b) => b.type === "writing").length,
    support: user.badges.filter((b) => b.type === "support").length,
    event: user.badges.filter((b) => b.type === "event").length,
    design: user.badges.filter((b) => b.type === "design").length,
    translation: user.badges.filter((b) => b.type === "translation").length,
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 md:pt-28">
      <div className="w-full max-w-7xl mx-auto">
        {/* Back Button */}
        <button className="mb-6 px-4 py-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 font-semibold rounded-lg transition">
          ← Back to Home
        </button>

        {/* Profile Header */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User Info */}
            <div>
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-4xl sm:text-5xl mb-4">
                  👤
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{user.username}</h1>
                <p className="text-slate-400 text-sm font-mono bg-slate-700/50 px-4 py-2 rounded-lg inline-block">
                  {user.wallet}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">TOTAL POINTS</p>
                  <p className="text-2xl font-bold text-white">{user.totalPoints}</p>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">CONTRIBUTIONS</p>
                  <p className="text-2xl font-bold text-white">{user.totalContributions}</p>
                </div>
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">BADGES EARNED</p>
                  <p className="text-2xl font-bold text-white">{user.badges.length}</p>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">MEMBER SINCE</p>
                  <p className="text-sm font-bold text-white">{user.joinedDate.toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Contributions Breakdown */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contribution Types</h2>
              <div className="space-y-3">
                {(Object.entries(statsbyType) as [ContributionType, number][]).map(([type, count]) => (
                  <div key={type}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{CONTRIBUTION_ICONS[type]}</span>
                        <span className="text-white font-semibold capitalize">{type}</span>
                      </div>
                      <span className="text-sm text-slate-400">{count} badge{count !== 1 ? "s" : ""}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full transition-all"
                        style={{ width: `${(count / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="space-y-8">
          {(["legendary", "diamond", "gold", "silver", "bronze"] as const).map((rarity) => (
            badgesByRarity[rarity].length > 0 && (
              <div key={rarity}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">
                    {rarity === "legendary" && "🌟"}
                    {rarity === "diamond" && "💎"}
                    {rarity === "gold" && "🥇"}
                    {rarity === "silver" && "🥈"}
                    {rarity === "bronze" && "🥉"}
                  </span>
                  <h2 className="text-2xl font-bold text-white capitalize">{rarity} Badges ({badgesByRarity[rarity].length})</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badgesByRarity[rarity].map((badge) => (
                    <button
                      key={badge.id}
                      onClick={() => setSelectedBadge(badge)}
                      className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 cursor-pointer ${BADGE_RARITY_COLORS[rarity].bg} bg-opacity-10 ${BADGE_RARITY_COLORS[rarity].border} hover:shadow-2xl ${BADGE_RARITY_COLORS[rarity].glow}`}
                    >
                      <div className="text-5xl mb-3 text-center">{badge.icon}</div>
                      <p className="font-bold text-white text-center mb-2">{badge.title}</p>
                      <p className="text-xs text-slate-300 text-center mb-3">{badge.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">+{badge.points} pts</span>
                        <span className="text-slate-400">{badge.mintedAt.toLocaleDateString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Badge Detail Modal */}
        {selectedBadge && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedBadge(null)}
          >
            <div
              className={`bg-gradient-to-br ${BADGE_RARITY_COLORS[selectedBadge.rarity].bg} bg-opacity-20 backdrop-blur-xl border-2 ${BADGE_RARITY_COLORS[selectedBadge.rarity].border} rounded-3xl p-8 max-w-md w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">{selectedBadge.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedBadge.title}</h2>
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  {selectedBadge.rarity} Badge
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-slate-700/50 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">DESCRIPTION</p>
                  <p className="text-white">{selectedBadge.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl">
                    <p className="text-slate-400 text-xs font-semibold mb-1">POINTS</p>
                    <p className="text-2xl font-bold text-white">+{selectedBadge.points}</p>
                  </div>

                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <p className="text-slate-400 text-xs font-semibold mb-1">TYPE</p>
                    <p className="text-white font-bold capitalize">{selectedBadge.type}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-700/50 rounded-xl">
                  <p className="text-slate-400 text-xs font-semibold mb-1">MINTED ON</p>
                  <p className="text-white font-bold">{selectedBadge.mintedAt.toLocaleString()}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedBadge(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

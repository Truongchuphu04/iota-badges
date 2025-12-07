"use client"

import React, { useState, useEffect } from "react"

interface BadgeHolder {
  id: string
  address: string
  points: number
  rank: number
  badgeType: "diamond" | "gold" | "silver" | "bronze"
}

export default function Leaderboard() {
  const [badges, setBadges] = useState<BadgeHolder[]>([
    { id: "0x123...", address: "0xUser1...5a2d", points: 1250, rank: 1, badgeType: "diamond" },
    { id: "0x456...", address: "0xUser2...3f8c", points: 980, rank: 2, badgeType: "gold" },
    { id: "0x789...", address: "0xUser3...7d4e", points: 850, rank: 3, badgeType: "gold" },
    { id: "0xabc...", address: "0xUser4...2b91", points: 720, rank: 4, badgeType: "silver" },
    { id: "0xdef...", address: "0xUser5...8a6f", points: 650, rank: 5, badgeType: "silver" },
  ])

  const getBadgeEmoji = (type: string) => {
    switch (type) {
      case "diamond":
        return "💎"
      case "gold":
        return "🥇"
      case "silver":
        return "🥈"
      case "bronze":
        return "🥉"
      default:
        return "🏅"
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "diamond":
        return "from-cyan-400 to-blue-400"
      case "gold":
        return "from-yellow-400 to-orange-400"
      case "silver":
        return "from-gray-300 to-gray-400"
      case "bronze":
        return "from-orange-400 to-amber-600"
      default:
        return "from-violet-400 to-indigo-400"
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏆</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Community Leaderboard</h2>
        </div>
        <p className="text-slate-400 ml-12">Top badge holders in the community</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl">
          <p className="text-slate-400 text-xs font-semibold mb-1">Total Members</p>
          <p className="text-2xl font-bold text-white">1,247</p>
        </div>
        <div className="p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl">
          <p className="text-slate-400 text-xs font-semibold mb-1">Total Points</p>
          <p className="text-2xl font-bold text-white">45.2K</p>
        </div>
        <div className="p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl">
          <p className="text-slate-400 text-xs font-semibold mb-1">Avg Points</p>
          <p className="text-2xl font-bold text-white">36</p>
        </div>
        <div className="p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl">
          <p className="text-slate-400 text-xs font-semibold mb-1">Top Score</p>
          <p className="text-2xl font-bold text-cyan-400">1.25K</p>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="space-y-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`p-4 sm:p-5 bg-gradient-to-r ${
              badge.rank === 1
                ? "from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
                : badge.rank === 2
                  ? "from-gray-400/20 to-gray-500/20 border-gray-400/50"
                  : badge.rank === 3
                    ? "from-orange-400/20 to-amber-500/20 border-orange-400/50"
                    : "from-slate-700/30 to-slate-800/30 border-slate-600/50"
            } border rounded-2xl hover:border-slate-500/80 transition-all hover:shadow-lg`}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Rank Badge */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${getBadgeColor(badge.badgeType)} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900">{badge.rank}</span>
                </div>
              </div>

              {/* Badge Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{getBadgeEmoji(badge.badgeType)}</span>
                  <span className="text-xs font-bold text-slate-300 uppercase">{badge.badgeType}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-white break-all">{badge.address}</p>
                <p className="text-xs text-slate-400 mt-1">Badge ID: {badge.id}</p>
              </div>

              {/* Points */}
              <div className="flex-shrink-0 text-right">
                <p className="text-2xl sm:text-3xl font-bold text-white">{badge.points}</p>
                <p className="text-xs text-slate-400 mt-1">⭐ Points</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-xl transition-all">
        View All Members (1,247)
      </button>
    </div>
  )
}

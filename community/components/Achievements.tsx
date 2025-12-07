"use client"

import React from "react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  progress: number
  maxProgress: number
  unlocked: boolean
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "first-badge",
      name: "First Step",
      description: "Mint your first badge",
      icon: "🎖️",
      progress: 1,
      maxProgress: 1,
      unlocked: true,
    },
    {
      id: "10-points",
      name: "Rising Star",
      description: "Earn 10 points",
      icon: "⭐",
      progress: 8,
      maxProgress: 10,
      unlocked: false,
    },
    {
      id: "100-points",
      name: "Community Star",
      description: "Earn 100 points",
      icon: "✨",
      progress: 28,
      maxProgress: 100,
      unlocked: false,
    },
    {
      id: "collector",
      name: "Collector",
      description: "Own 5 different badges",
      icon: "🏆",
      progress: 1,
      maxProgress: 5,
      unlocked: false,
    },
    {
      id: "social",
      name: "Social Butterfly",
      description: "Share your badge 10 times",
      icon: "🦋",
      progress: 3,
      maxProgress: 10,
      unlocked: false,
    },
    {
      id: "champion",
      name: "Champion",
      description: "Rank in top 10",
      icon: "👑",
      progress: 0,
      maxProgress: 1,
      unlocked: false,
    },
  ]

  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const progressPercentage = Math.round(
    (achievements.reduce((acc, a) => acc + Math.min(a.progress, a.maxProgress), 0) / 
      achievements.reduce((acc, a) => acc + a.maxProgress, 0)) * 100
  )

  return (
    <div className="w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🎯</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
        </div>
        <p className="text-slate-400 ml-12">Unlock badges and milestones</p>
      </div>

      {/* Progress Summary */}
      <div className="mb-8 p-6 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-slate-600/50 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <p className="text-white font-semibold">Overall Progress</p>
          <p className="text-2xl font-bold text-violet-400">{progressPercentage}%</p>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-300 mt-3">
          {unlockedCount} of {achievements.length} achievements unlocked
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-5 rounded-2xl border transition-all ${
              achievement.unlocked
                ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50 shadow-lg shadow-yellow-500/10"
                : "bg-slate-700/30 border-slate-600/50 opacity-75"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`text-3xl p-2 rounded-lg ${achievement.unlocked ? "bg-yellow-500/20" : "bg-slate-700/50"}`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm sm:text-base">{achievement.name}</p>
                  <p className="text-xs text-slate-400">{achievement.description}</p>
                </div>
              </div>
              {achievement.unlocked && <span className="text-xl">✓</span>}
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-slate-400">
                  {achievement.progress} / {achievement.maxProgress}
                </p>
                <p className="text-xs font-semibold text-slate-300">
                  {Math.round((achievement.progress / achievement.maxProgress) * 100)}%
                </p>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    achievement.unlocked
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                      : "bg-gradient-to-r from-slate-500 to-slate-600"
                  }`}
                  style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Reward Preview */}
      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-indigo-500/50 rounded-2xl">
        <p className="text-slate-300 text-sm mb-3">🎁 Next Reward: Rising Star (8/10 points)</p>
        <p className="text-white font-semibold">You're 2 points away! Keep earning to unlock special benefits.</p>
      </div>
    </div>
  )
}

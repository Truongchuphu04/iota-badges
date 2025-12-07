"use client"

import React, { useState } from "react"
import { useNotification } from "@/lib/notification-context"

type ContributionType = "code" | "writing" | "support" | "event" | "design" | "translation"
type ContributionStatus = "pending" | "approved" | "rejected"

interface SubmittedContribution {
  id: string
  username: string
  wallet: string
  type: ContributionType
  title: string
  description: string
  link?: string
  status: ContributionStatus
  submittedAt: Date
  reviewedAt?: Date
}

const CONTRIBUTION_ICONS: Record<ContributionType, string> = {
  code: "💻",
  writing: "✍️",
  support: "🤝",
  event: "🎯",
  design: "🎨",
  translation: "🌍",
}

const STATUS_COLORS: Record<ContributionStatus, { bg: string; text: string; border: string }> = {
  pending: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  approved: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  rejected: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
}

// Mock data
const MOCK_CONTRIBUTIONS: SubmittedContribution[] = [
  {
    id: "1",
    username: "Alice Dev",
    wallet: "0x1234...5678",
    type: "code",
    title: "Fixed critical security bug",
    description: "Patched XSS vulnerability in auth module",
    link: "https://github.com/iota/repo/pull/123",
    status: "pending",
    submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    username: "Bob Writer",
    wallet: "0x9876...4321",
    type: "writing",
    title: "Advanced IOTA Tutorial",
    description: "Comprehensive guide on building dApps with IOTA SDK",
    link: "https://medium.com/iota-tutorial",
    status: "approved",
    submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    reviewedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: "3",
    username: "Charlie Support",
    wallet: "0x5555...6666",
    type: "support",
    title: "Helped 5 community members",
    description: "Answered questions in Discord and helped debug issues",
    status: "approved",
    submittedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
    reviewedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: "4",
    username: "Diana Designer",
    wallet: "0x7777...8888",
    type: "design",
    title: "UI Kit for IOTA Community",
    description: "Created comprehensive design system for community projects",
    link: "https://figma.com/iota-design",
    status: "pending",
    submittedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: "5",
    username: "Eve Event",
    wallet: "0x9999...0000",
    type: "event",
    title: "Organized IOTA Hackathon",
    description: "Successfully organized and managed 3-day hackathon with 50+ participants",
    status: "rejected",
    submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    reviewedAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
  },
]

export default function AdminDashboard() {
  const { showNotification } = useNotification()
  const [contributions, setContributions] = useState<SubmittedContribution[]>(MOCK_CONTRIBUTIONS)
  const [selectedFilter, setSelectedFilter] = useState<ContributionStatus | "all">("all")
  const [selectedContribution, setSelectedContribution] = useState<SubmittedContribution | null>(null)

  const filteredContributions =
    selectedFilter === "all" ? contributions : contributions.filter((c) => c.status === selectedFilter)

  const handleApprove = (id: string) => {
    setContributions(
      contributions.map((c) =>
        c.id === id ? { ...c, status: "approved" as const, reviewedAt: new Date() } : c
      )
    )
    showNotification(
      "Badge Approved!",
      "The contribution has been approved and badge has been minted.",
      "success",
      4000
    )
    setSelectedContribution(null)
  }

  const handleReject = (id: string) => {
    setContributions(
      contributions.map((c) =>
        c.id === id ? { ...c, status: "rejected" as const, reviewedAt: new Date() } : c
      )
    )
    showNotification(
      "Contribution Rejected",
      "The contribution has been marked as rejected.",
      "warning",
      4000
    )
    setSelectedContribution(null)
  }

  const stats = {
    total: contributions.length,
    pending: contributions.filter((c) => c.status === "pending").length,
    approved: contributions.filter((c) => c.status === "approved").length,
    rejected: contributions.filter((c) => c.status === "rejected").length,
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 md:pt-28">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🛡️</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <p className="text-slate-400 ml-12">Review and approve community contributions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, color: "from-blue-500 to-cyan-500" },
            { label: "Pending", value: stats.pending, color: "from-yellow-500 to-orange-500" },
            { label: "Approved", value: stats.approved, color: "from-green-500 to-emerald-500" },
            { label: "Rejected", value: stats.rejected, color: "from-red-500 to-pink-500" },
          ].map((stat) => (
            <div key={stat.label} className={`p-4 sm:p-6 bg-gradient-to-br ${stat.color} bg-opacity-10 border border-slate-700 rounded-2xl`}>
              <p className="text-slate-400 text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
              {/* Filters */}
              <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
                {(["all", "pending", "approved", "rejected"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedFilter(status)}
                    className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                      selectedFilter === status
                        ? "bg-violet-600 text-white"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                  >
                    {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>

              {/* Contributions List */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredContributions.length === 0 ? (
                  <div className="p-8 text-center text-slate-400">
                    <p className="text-lg">No contributions found</p>
                  </div>
                ) : (
                  filteredContributions.map((contribution) => (
                    <button
                      key={contribution.id}
                      onClick={() => setSelectedContribution(contribution)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        selectedContribution?.id === contribution.id
                          ? "border-violet-500 bg-violet-500/10"
                          : "border-slate-600 hover:border-slate-500 bg-slate-700/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{CONTRIBUTION_ICONS[contribution.type]}</span>
                          <div>
                            <p className="font-bold text-white">{contribution.username}</p>
                            <p className="text-xs text-slate-400">{contribution.wallet}</p>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            STATUS_COLORS[contribution.status].bg
                          } ${STATUS_COLORS[contribution.status].text} border ${
                            STATUS_COLORS[contribution.status].border
                          }`}
                        >
                          {contribution.status === "pending" && "⏳"}
                          {contribution.status === "approved" && "✅"}
                          {contribution.status === "rejected" && "❌"}
                          {" " + contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)}
                        </div>
                      </div>
                      <p className="font-semibold text-white mb-1 truncate">{contribution.title}</p>
                      <p className="text-xs text-slate-400">{new Date(contribution.submittedAt).toLocaleDateString()}</p>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Detail Section */}
          <div className="lg:col-span-1">
            {selectedContribution ? (
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl sticky top-6">
                <h3 className="text-xl font-bold text-white mb-4">Review Contribution</h3>

                {/* Contribution Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-semibold mb-1">TYPE</p>
                    <p className="text-white font-bold">
                      {CONTRIBUTION_ICONS[selectedContribution.type]} {selectedContribution.type.toUpperCase()}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-xs font-semibold mb-1">TITLE</p>
                    <p className="text-white font-bold">{selectedContribution.title}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-xs font-semibold mb-1">DESCRIPTION</p>
                    <p className="text-slate-300 text-sm">{selectedContribution.description}</p>
                  </div>

                  {selectedContribution.link && (
                    <div>
                      <p className="text-slate-400 text-xs font-semibold mb-1">REFERENCE LINK</p>
                      <a
                        href={selectedContribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-violet-300 text-sm truncate"
                      >
                        {selectedContribution.link}
                      </a>
                    </div>
                  )}

                  <div>
                    <p className="text-slate-400 text-xs font-semibold mb-1">SUBMITTED</p>
                    <p className="text-slate-300 text-sm">
                      {new Date(selectedContribution.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div
                  className={`p-3 rounded-xl mb-6 border ${STATUS_COLORS[selectedContribution.status].bg} ${
                    STATUS_COLORS[selectedContribution.status].border
                  }`}
                >
                  <p className={`text-sm font-bold ${STATUS_COLORS[selectedContribution.status].text}`}>
                    {selectedContribution.status === "pending" && "⏳ Awaiting Review"}
                    {selectedContribution.status === "approved" && "✅ Approved - Badge Minted"}
                    {selectedContribution.status === "rejected" && "❌ Rejected"}
                  </p>
                </div>

                {/* Action Buttons */}
                {selectedContribution.status === "pending" && (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleApprove(selectedContribution.id)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all transform hover:scale-105"
                    >
                      ✅ Approve & Mint Badge
                    </button>
                    <button
                      onClick={() => handleReject(selectedContribution.id)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all transform hover:scale-105"
                    >
                      ❌ Reject
                    </button>
                  </div>
                )}

                {selectedContribution.status !== "pending" && (
                  <div className="p-4 bg-slate-700/50 rounded-xl">
                    <p className="text-xs text-slate-400 mb-1">REVIEWED</p>
                    <p className="text-white font-semibold">
                      {selectedContribution.reviewedAt?.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl text-center">
                <p className="text-2xl mb-2">📋</p>
                <p className="text-slate-400">Select a contribution to review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

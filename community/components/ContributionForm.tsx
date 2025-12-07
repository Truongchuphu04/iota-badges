"use client"

import React, { useState } from "react"
import { useNotification } from "@/lib/notification-context"

type ContributionType = "code" | "writing" | "support" | "event" | "design" | "translation"

interface Contribution {
  type: ContributionType
  title: string
  description: string
  link?: string
  points: number
  icon: string
  color: string
}

const CONTRIBUTION_TYPES: Record<ContributionType, Contribution> = {
  code: {
    type: "code",
    title: "Code Contribution",
    description: "Submit pull requests, fix bugs, add features",
    icon: "💻",
    points: 100,
    color: "from-green-500 to-emerald-500",
  },
  writing: {
    type: "writing",
    title: "Documentation & Writing",
    description: "Write tutorials, docs, blog posts, articles",
    icon: "✍️",
    points: 50,
    color: "from-blue-500 to-cyan-500",
  },
  support: {
    type: "support",
    title: "Community Support",
    description: "Help others, answer questions, mentor",
    icon: "🤝",
    points: 30,
    color: "from-purple-500 to-pink-500",
  },
  event: {
    type: "event",
    title: "Event Participation",
    description: "Attend workshops, hackathons, meetups",
    icon: "🎯",
    points: 40,
    color: "from-orange-500 to-red-500",
  },
  design: {
    type: "design",
    title: "Design Contribution",
    description: "Create graphics, UI/UX, branding assets",
    icon: "🎨",
    points: 60,
    color: "from-pink-500 to-rose-500",
  },
  translation: {
    type: "translation",
    title: "Translation",
    description: "Translate content to other languages",
    icon: "🌍",
    points: 40,
    color: "from-yellow-500 to-amber-500",
  },
}

export default function ContributionForm() {
  const { showNotification } = useNotification()
  const [selectedType, setSelectedType] = useState<ContributionType>("code")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const selectedContribution = CONTRIBUTION_TYPES[selectedType]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    showNotification(
      "Contribution Submitted!",
      `Your ${selectedType} contribution has been submitted for review.`,
      "success",
      5000
    )
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ title: "", description: "", link: "" })
    }, 3000)
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🎁</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Submit Contribution</h2>
        </div>
        <p className="text-slate-400 ml-12">Earn badges by contributing to the community</p>
      </div>

      {isSubmitted ? (
        // Success Message
        <div className="p-8 sm:p-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl text-center">
          <p className="text-2xl mb-3">✅</p>
          <h3 className="text-2xl font-bold text-white mb-2">Contribution Submitted!</h3>
          <p className="text-slate-300 mb-4">
            Your contribution has been submitted for review. Once verified, you'll receive your badge NFT!
          </p>
          <p className="text-sm text-slate-400">
            Estimated review time: 24-48 hours
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contribution Type Selection */}
          <div>
            <label className="block text-white font-bold mb-4">Select Contribution Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(CONTRIBUTION_TYPES).map(([key, contribution]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedType(key as ContributionType)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedType === key
                      ? `border-violet-500 bg-gradient-to-br ${contribution.color} bg-opacity-20`
                      : "border-slate-600 hover:border-slate-500 bg-slate-700/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{contribution.icon}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-700 rounded text-slate-300">
                      +{contribution.points} pts
                    </span>
                  </div>
                  <p className="font-bold text-white text-sm">{contribution.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{contribution.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Type Preview */}
          <div className={`p-6 rounded-2xl bg-gradient-to-r ${selectedContribution.color} bg-opacity-10 border border-slate-600`}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedContribution.icon}</span>
              <div>
                <p className="text-white font-bold text-lg">{selectedContribution.title}</p>
                <p className="text-slate-300 text-sm">Earn {selectedContribution.points} points</p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-white font-semibold mb-2">Contribution Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Fixed critical security bug in authentication"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-semibold mb-2">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your contribution in detail..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition resize-none"
              />
            </div>

            {/* Link */}
            <div>
              <label className="block text-white font-semibold mb-2">Reference Link (optional)</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="e.g., GitHub PR, Blog post URL, Event link"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm text-slate-200">
              <strong>📋 Note:</strong> Your contribution will be reviewed by community moderators within 24-48 hours. Once approved, your NFT badge will be automatically minted to your wallet.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-violet-500/50 text-lg"
          >
            ✨ Submit Contribution
          </button>
        </form>
      )}
    </div>
  )
}

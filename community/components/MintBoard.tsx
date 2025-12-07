"use client"

import React, { useState } from "react"
import { useContract } from "@/hooks/useContract"
import { useCurrentAccount } from "@iota/dapp-kit"

export default function MintBoard() {
  const currentAccount = useCurrentAccount()
  const { data, actions, state, objectId, isOwner, objectExists, hasValidData } = useContract()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!currentAccount) {
    return (
      <div className="w-full flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          <div className="mb-8 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl shadow-purple-500/50">
              <span className="text-7xl">🏅</span>
            </div>
          </div>
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-200">Community Badges</h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">Connect your wallet to mint and manage community badges on IOTA</p>
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-xl border border-violet-500/30 backdrop-blur">
            <p className="text-sm text-slate-300">👈 Click the wallet button in the top-right to connect</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl shadow-lg shadow-violet-500/50">
              <span className="text-3xl">🏅</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-200">Community Badges</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">Mint and manage your IOTA community badges with elegant design and smooth interactions</p>
        </div>

        {/* Main Content - Centered Card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Badge Display - Main Card */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
              {!objectId ? (
                <div className="flex flex-col items-center justify-center min-h-80 sm:min-h-96">
                  <div className="mb-8 p-12 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-slate-700/50 rounded-3xl animate-pulse">
                    <span className="text-8xl block">🎖️</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">Ready to Earn Badges?</h2>
                  <p className="text-slate-400 text-center mb-8 max-w-xs leading-relaxed">Create your first community badge and start earning points with your community</p>
                  <button
                    onClick={actions.createObject}
                    disabled={state.isPending}
                    className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 text-base sm:text-lg shadow-lg"
                  >
                    {state.isPending ? "🔄 Creating..." : "🚀 Mint Badge"}
                  </button>
                  {state.error && (
                    <div className="mt-8 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm w-full max-w-md">
                      {(state.error as Error)?.message || String(state.error)}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {state.isLoading && !data ? (
                    <div className="flex flex-col items-center justify-center min-h-80 sm:min-h-96">
                      <div className="text-center">
                        <div className="mb-6 inline-block">
                          <div className="inline-block p-4 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full animate-spin shadow-lg shadow-violet-500/50" style={{animationDuration: '2s'}}>
                            <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-slate-300 font-semibold text-lg">Minting your badge...</p>
                        <p className="text-slate-400 text-sm mt-2">Please wait while we create your badge on the blockchain</p>
                      </div>
                    </div>
                  ) : state.error ? (
                    <div className="p-4 sm:p-6 bg-red-500/20 border border-red-500 rounded-lg">
                      <p className="text-red-200 font-semibold mb-2 text-sm sm:text-base">Error loading badge</p>
                      <p className="text-red-100/70 text-xs sm:text-sm mb-4">{state.error.message || "Badge not found"}</p>
                      <button
                        onClick={actions.clearObject}
                        className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                      >
                        Clear & Create New
                      </button>
                    </div>
                  ) : objectExists && !hasValidData ? (
                    <div className="p-4 sm:p-6 bg-yellow-500/20 border border-yellow-500 rounded-lg">
                      <p className="text-yellow-200 text-sm sm:text-base">Object found but data is invalid</p>
                    </div>
                  ) : data ? (
                    <div className="space-y-6">
                      {/* Badge Preview - Premium Card */}
                      <div className="p-8 sm:p-10 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-slate-600/50 rounded-3xl backdrop-blur hover:border-slate-500/80 transition-all">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                          <div className="relative flex-shrink-0">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all hover:scale-105">
                              <span className="text-7xl sm:text-8xl">🏅</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 sm:px-5 py-2 rounded-full font-bold text-sm sm:text-base text-slate-900 shadow-lg">
                              ⭐ {data.value} pts
                            </div>
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Your Badge</h2>
                            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">Your community badge is active on the IOTA blockchain and ready to earn!</p>
                            <div className="space-y-3">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span className="text-slate-400 text-sm">Badge ID:</span>
                                <code className="text-xs bg-slate-700/50 px-4 py-2 rounded-lg text-slate-200 font-mono break-all border border-slate-600 hover:bg-slate-700 transition">{objectId?.slice(0, 20)}...</code>
                                <button onClick={() => copyToClipboard(objectId)} className="text-xs px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition whitespace-nowrap">
                                  {copied ? "✓ Copied" : "Copy ID"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid - Premium Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-violet-500/30 transition">
                          <p className="text-slate-400 text-xs font-semibold mb-2">POINTS</p>
                          <p className="text-3xl sm:text-4xl font-bold text-white">{data.value}</p>
                        </div>
                        <div className="p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/30 transition">
                          <p className="text-slate-400 text-xs font-semibold mb-2">STATUS</p>
                          <p className="text-lg sm:text-xl font-bold text-green-400">Active ✓</p>
                        </div>
                        <div className="p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-yellow-500/30 transition">
                          <p className="text-slate-400 text-xs font-semibold mb-2">OWNER</p>
                          <p className="text-sm font-semibold text-yellow-400">{isOwner ? "👑 You" : "Other"}</p>
                        </div>
                      </div>

                      {/* Transaction Info - Premium */}
                      {state.hash && (
                        <div className="p-5 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-green-500/30 transition">
                          <div className="flex items-start gap-3">
                            <span className="text-xl mt-1">✓</span>
                            <div className="flex-1">
                              <p className="text-slate-400 text-sm font-semibold mb-2">TRANSACTION CONFIRMED</p>
                              <code className="text-xs block text-slate-300 font-mono break-all bg-slate-900/50 p-2 rounded border border-slate-600">{state.hash}</code>
                              {state.isConfirmed && (
                                <p className="text-green-400 text-xs font-semibold mt-2">Blockchain confirmed ✓</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {state.error && (
                        <div className="p-5 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
                          {(state.error as Error)?.message || String(state.error)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center p-6 sm:p-8">
                      <p className="text-slate-300 text-sm sm:text-base">Badge not found</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Actions Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl sticky top-4 sm:top-6 lg:top-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Actions
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <button
                  onClick={actions.createObject}
                  disabled={objectExists || state.isLoading}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg"
                >
                  🚀 {objectExists ? "Badge Created" : "Mint Badge"}
                </button>

                <button
                  onClick={actions.increment}
                  disabled={!objectExists || state.isLoading}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg"
                >
                  ⭐ Add Point
                </button>

                {isOwner && (
                  <button
                    onClick={actions.reset}
                    disabled={!objectExists || state.isLoading}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg"
                  >
                    🔄 Reset Points
                  </button>
                )}

                <button
                  onClick={actions.clearObject}
                  disabled={!objectId}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all text-sm sm:text-base"
                >
                  ✕ Clear Badge
                </button>
              </div>

              {/* Status Card - Premium */}
              <div className="mt-8 p-5 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-2xl">
                <p className="text-slate-400 text-xs font-semibold mb-2 uppercase">Status</p>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${state.isLoading ? 'bg-yellow-400 animate-pulse' : state.isConfirmed ? 'bg-green-400' : state.isPending ? 'bg-yellow-400' : 'bg-blue-400'}`}></span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {state.isLoading ? "⏳ Processing" : state.isConfirmed ? "✓ Confirmed" : state.isPending ? "⏳ Pending" : "✅ Ready"}
                  </p>
                </div>
              </div>

              {/* Info Card - Premium */}
              <div className="mt-4 p-5 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl">
                <p className="text-slate-200 text-sm leading-relaxed">
                  {isOwner && objectExists ? "👑 You own this badge • Full control" : objectExists ? "📋 You can earn points • Add points feature" : "📝 Ready to create • Mint your first badge"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">✨ Built with ❤️ on IOTA • Secure & Decentralized ✨</p>
        </div>
      </div>
    </div>
  )
}

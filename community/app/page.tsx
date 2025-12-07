import { WalletConnect } from "@/components/Wallet-connect"
import MintBoard from "@/components/MintBoard"
import Leaderboard from "@/components/Leaderboard"
import Achievements from "@/components/Achievements"
import ContributionForm from "@/components/ContributionForm"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950">
      <div className="fixed top-16 sm:top-20 right-3 sm:right-4 md:right-6 z-40">
        <WalletConnect />
      </div>
      
      {/* Main Content */}
      <div className="w-full pt-20 sm:pt-24 md:pt-28 p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mint Board Section */}
          <div className="mb-12 sm:mb-16">
            <MintBoard />
          </div>

          {/* Contribution Form Section */}
          <div className="mb-12 sm:mb-16">
            <ContributionForm />
          </div>

          {/* Leaderboard & Achievements Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Leaderboard - 3 columns */}
            <div className="lg:col-span-3">
              <Leaderboard />
            </div>

            {/* Achievements - 2 columns */}
            <div className="lg:col-span-2">
              <Achievements />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

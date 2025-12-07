import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Provider } from "@/components/Provider"
import Navbar from "@/components/Navbar"
import NotificationDisplay from "@/components/NotificationDisplay"
import { NotificationProvider } from "@/lib/notification-context"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "IOTA Community Badges",
  description: "Mint NFT badges for community contributions on IOTA blockchain",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          <NotificationProvider>
            <Navbar />
            {children}
            <NotificationDisplay />
          </NotificationProvider>
        </Provider>
      </body>
    </html>
  )
}

"use client"

import React from "react"
import { useNotification, NotificationType } from "@/lib/notification-context"

const notificationStyles: Record<
  NotificationType,
  { bg: string; border: string; icon: string; title: string }
> = {
  success: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "✅",
    title: "text-green-400",
  },
  error: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: "❌",
    title: "text-red-400",
  },
  info: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "ℹ️",
    title: "text-blue-400",
  },
  warning: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    icon: "⚠️",
    title: "text-yellow-400",
  },
}

export default function NotificationDisplay() {
  const { notifications, removeNotification } = useNotification()

  return (
    <div className="fixed top-20 sm:top-24 right-4 sm:right-6 md:right-8 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => {
        const style = notificationStyles[notification.type]
        return (
          <div
            key={notification.id}
            className={`${style.bg} ${style.border} border rounded-xl p-4 sm:p-5 backdrop-blur-xl shadow-lg animate-bounce`}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">{style.icon}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-bold ${style.title} text-sm sm:text-base`}>
                  {notification.title}
                </p>
                {notification.message && (
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    {notification.message}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="text-slate-400 hover:text-slate-200 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

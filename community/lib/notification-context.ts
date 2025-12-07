"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

export type NotificationType = "success" | "error" | "info" | "warning"

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message?: string
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  showNotification: (
    title: string,
    message?: string,
    type?: NotificationType,
    duration?: number
  ) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = useCallback(
    (
      title: string,
      message?: string,
      type: NotificationType = "info",
      duration = 3000
    ) => {
      const id = Math.random().toString(36).substr(2, 9)
      const notification: Notification = { id, type, title, message, duration }

      setNotifications((prev) => [...prev, notification])

      if (duration) {
        setTimeout(() => {
          removeNotification(id)
        }, duration)
      }
    },
    []
  )

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  return (
    <NotificationContext.Provider
      value={{ notifications, showNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider")
  }
  return context
}

'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../store/authStore'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return children
}
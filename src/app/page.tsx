'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from './store/authStore'
import AuthPage from './components/authentication/page'

export default function HomePage() {
  const { isAuthenticated, hydrated, hydrate } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    hydrate()
  }, [])

  useEffect(() => {
    if (hydrated && isAuthenticated) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated, hydrated, router])

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return <AuthPage type="login" />
}
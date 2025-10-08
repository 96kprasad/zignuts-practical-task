import { create } from 'zustand'

export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  initialized: false,
      
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user
      }),
      
      initialize: async () => {
        const { initialized } = get()
        if (initialized) return
        
        set({ loading: true })
        try {
          const response = await fetch('/api/auth/verify')
          if (response.ok) {
            const data = await response.json()
            set({ user: data.user, isAuthenticated: true, loading: false, initialized: true })
          } else {
            set({ user: null, isAuthenticated: false, loading: false, initialized: true })
          }
        } catch (error) {
          set({ user: null, isAuthenticated: false, loading: false, initialized: true })
        }
      },
      
      logout: async () => {
        try {
          await fetch('/api/auth/logout', { method: 'POST' })
          set({ user: null, isAuthenticated: false, initialized: false })
        } catch (error) {
          console.error('Logout error:', error)
          set({ user: null, isAuthenticated: false, initialized: false })
        }
      },
      
      login: async (email, password) => {
        set({ loading: true })
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          })
          
          const data = await response.json()
          
          if (response.ok) {
            set({ user: data.user, isAuthenticated: true, loading: false })
            return { success: true }
          } else {
            set({ loading: false })
            return { success: false, error: data.error }
          }
        } catch (error) {
          set({ loading: false })
          return { success: false, error: 'Login failed' }
        }
      },
      
      register: async (email, password, name) => {
        set({ loading: true })
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name })
          })
          
          const data = await response.json()
          
          if (response.ok) {
            set({ loading: false })
            return { success: true }
          } else {
            set({ loading: false })
            return { success: false, error: data.error }
          }
        } catch (error) {
          set({ loading: false })
          return { success: false, error: 'Registration failed' }
        }
      }
    }))
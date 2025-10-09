import { create } from 'zustand'
import { apiClient } from '../../../utils/api'

let isInitializing = false

export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  
  initialize: async () => {
    if (isInitializing) return
    isInitializing = true
    
    try {
      const response = await apiClient.auth.verify()
      set({ user: response.data.user, isAuthenticated: true, loading: false })
    } catch (error) {
      set({ user: null, isAuthenticated: false, loading: false })
    } finally {
      isInitializing = false
    }
  },
  
  logout: async () => {
    try {
      await apiClient.auth.logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
    set({ user: null, isAuthenticated: false, loading: false })
  },
  
  login: async (email, password) => {
    set({ loading: true })
    try {
      const response = await apiClient.auth.login(email, password)
      set({ user: response.data.user, isAuthenticated: true, loading: false })
      return { success: true }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.response?.data?.error || 'Login failed' }
    }
  },
  
  register: async (email, password, name) => {
    set({ loading: true })
    try {
      await apiClient.auth.register(email, password, name)
      set({ loading: false })
      return { success: true }
    } catch (error) {
      set({ loading: false })
      return { success: false, error: error.response?.data?.error || 'Registration failed' }
    }
  }
}))
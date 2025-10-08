'use client'
import { useRouter } from 'next/navigation'
import { SVGIcons } from '../../../../utils/svgConstants'
import { useAuthStore } from '@/app/store/authStore'

export default function Header() {
  const { user, logout } = useAuthStore()
  const router = useRouter()
  
  const handleLogout = async () => {
    await logout()
    router.replace('/')
  }
  
  return (
    <header className="header-fixed bg-gray-900 shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">
          {`Welcome  ${user?.name.charAt(0).toUpperCase() + user?.name.slice(1).toLowerCase() || 'User'} `}
          </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <SVGIcons.Notification className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
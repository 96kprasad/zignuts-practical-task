'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SVGIcons } from '../../utils/svgConstants'

export default function Sidebar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <aside className="w-64 bg-gray-900 text-white border-r border-red-500 h-screen fixed">
      <div className="p-6">
        <h2 className="text-xl text-red-500 font-bold mb-8">Zignuts Taskora</h2>
        <nav className="space-y-2">
          <Link 
            href="/dashboard"
            className={`w-full flex font-semibold items-center px-4 py-2 rounded-lg ${
              isActive('/dashboard') ? 'bg-red-500' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <SVGIcons.Dashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link 
            href="/tasks"
            className={`w-full flex font-semibold items-center px-4 py-2 rounded-lg ${
              isActive('/tasks') ? 'bg-red-500' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <SVGIcons.Tasks className="w-5 h-5 mr-3" />
            Tasks
          </Link>
          <Link 
            href="/projects"
            className={`w-full flex font-semibold items-center px-4 py-2 rounded-lg ${
              isActive('/projects') ? 'bg-red-500' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <SVGIcons.Projects className="w-5 h-5 mr-3" />
            Projects
          </Link>
        </nav>
      </div>
    </aside>
  )
}
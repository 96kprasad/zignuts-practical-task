import { SVGIcons } from '../../utils/svgConstants'

export default function Header() {
  return (
    <header className="bg-[#111827] shadow-sm border-b border-red-500 px-6 py-4 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <SVGIcons.Notification className="w-6 h-6" />
          </button>
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  )
}
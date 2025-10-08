'use client'
import { useState, useEffect } from 'react'
import ProjectCard from '../../components/project/ProjectCard'
import ProjectListItem from '../../components/project/ProjectListItem'
import { SVGIcons } from '../../../../utils/svgConstants'

interface Task {
  id: number
  title: string
  status: 'pending' | 'completed'
}

interface Project {
  id: number
  name: string
  description: string
  tasks: Task[]
}

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Mock data - replace with API call
    const mockProjects: Project[] = [
      {
        id: 1,
        name: 'Website Redesign',
        description: 'Complete redesign of company website with modern UI/UX',
        tasks: [
          { id: 1, title: 'Create wireframes', status: 'completed' },
          { id: 2, title: 'Design mockups', status: 'completed' },
          { id: 3, title: 'Frontend development', status: 'pending' },
          { id: 4, title: 'Backend integration', status: 'pending' }
        ]
      },
      {
        id: 2,
        name: 'Mobile App Development',
        description: 'Native mobile app for iOS and Android platforms',
        tasks: [
          { id: 5, title: 'Setup project structure', status: 'completed' },
          { id: 6, title: 'Implement authentication', status: 'pending' },
          { id: 7, title: 'Create main screens', status: 'pending' }
        ]
      },
      {
        id: 3,
        name: 'Database Migration',
        description: 'Migrate legacy database to new cloud infrastructure',
        tasks: [
          { id: 8, title: 'Analyze current schema', status: 'completed' },
          { id: 9, title: 'Design new schema', status: 'completed' },
          { id: 10, title: 'Data migration script', status: 'completed' },
          { id: 11, title: 'Testing and validation', status: 'pending' }
        ]
      },
      {
        id: 4,
        name: 'Mobile App my Manager',
        description: 'Native mobile app for iOS and Android platforms',
        tasks: [
          { id: 5, title: 'Setup project structure', status: 'completed' },
          { id: 6, title: 'Implement authentication', status: 'pending' },
          { id: 7, title: 'Create main screens', status: 'pending' }
        ]
      },
    ]
    setProjects(mockProjects)
  }, [])

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600 text-lg">Here's what's happening with your projects today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl">
              + New Project
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Projects</p>
                <p className="text-3xl font-bold">{projects.length}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <SVGIcons.Projects className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Completed Tasks</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.tasks.filter(t => t.status === 'completed').length, 0)}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <SVGIcons.Tasks className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-medium">Pending Tasks</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.tasks.filter(t => t.status === 'pending').length, 0)}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Progress</p>
                <p className="text-3xl font-bold">{Math.round((projects.reduce((acc, p) => acc + p.tasks.filter(t => t.status === 'completed').length, 0) / projects.reduce((acc, p) => acc + p.tasks.length, 0)) * 100) || 0}%</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Projects</h2>
            <p className="text-gray-500">Manage and track your project progress</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <SVGIcons.Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <SVGIcons.List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map(project => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
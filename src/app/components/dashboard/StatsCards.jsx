'use client'
import { SVGIcons } from '../../../../utils/svgConstants'

export default function StatsCards({ projects }) {
  const totalProjects = projects.length
  const completedTasks = projects.reduce((acc, p) => acc + (p.tasks || []).filter(t => t.status === 'completed').length, 0)
  const pendingTasks = projects.reduce((acc, p) => acc + (p.tasks || []).filter(t => t.status === 'pending').length, 0)
  const totalTasks = projects.reduce((acc, p) => acc + (p.tasks || []).length, 0)
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100) || 0

  const stats = [
    {
      title: 'Total Projects',
      value: totalProjects,
      bgColor: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-100',
      icon: <SVGIcons.Projects className="w-6 h-6" />
    },
    {
      title: 'Completed Tasks',
      value: completedTasks,
      bgColor: 'from-green-500 to-green-600',
      textColor: 'text-green-100',
      icon: <SVGIcons.Tasks className="w-6 h-6" />
    },
    {
      title: 'Pending Tasks',
      value: pendingTasks,
      bgColor: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Progress',
      value: `${progressPercentage}%`,
      bgColor: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${stat.textColor} text-sm font-medium`}>{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
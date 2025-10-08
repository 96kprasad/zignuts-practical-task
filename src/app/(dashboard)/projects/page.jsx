'use client'
import { useState } from 'react'
import { EditButton, DeleteButton} from '../../components/action/page'

const sampleProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete redesign of company website with modern UI/UX',
    status: 'active',
    priority: 'high',
    startDate: '2024-01-01',
    endDate: '2024-03-15',
    manager: 'John Smith',
    // team: ['Alice Johnson', 'Bob Wilson', 'Carol Davis', 'David Brown'],
    budget: '$50,000',
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
    status: 'active',
    priority: 'medium',
    startDate: '2024-01-15',
    endDate: '2024-04-30',
    manager: 'Sarah Connor',
    // team: ['Mike Johnson', 'Lisa Wang', 'Tom Anderson'],
    budget: '$75,000',
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
    status: 'completed',
    priority: 'high',
    startDate: '2023-12-01',
    endDate: '2024-01-31',
    manager: 'Robert Chen',
    // team: ['Emma Wilson', 'James Lee'],
    budget: '$30,000',
    tasks: [
      { id: 8, title: 'Analyze current schema', status: 'completed' },
      { id: 9, title: 'Design new schema', status: 'completed' },
      { id: 10, title: 'Data migration script', status: 'completed' },
      { id: 11, title: 'Testing and validation', status: 'completed' }
    ]
  },
  {
    id: 4,
    name: 'API Development',
    description: 'RESTful API for third-party integrations',
    status: 'active',
    priority: 'medium',
    startDate: '2024-02-01',
    endDate: '2024-05-15',
    manager: 'Jennifer Martinez',
    // team: ['Alex Thompson', 'Maria Garcia', 'Chris Johnson', 'Nina Patel', 'Ryan O\'Connor'],
    budget: '$40,000',
    tasks: [
      { id: 12, title: 'API design', status: 'completed' },
      { id: 13, title: 'Authentication system', status: 'pending' },
      { id: 14, title: 'Endpoint development', status: 'pending' }
    ]
  },
  {
    id: 5,
    name: 'Security Audit',
    description: 'Comprehensive security assessment and improvements',
    status: 'on-hold',
    priority: 'high',
    startDate: '2024-03-01',
    endDate: '2024-04-15',
    manager: 'Kevin Zhang',
    // team: ['Sophie Miller', 'Daniel Kim'],
    budget: '$25,000',
    tasks: [
      { id: 15, title: 'Vulnerability assessment', status: 'pending' },
      { id: 16, title: 'Penetration testing', status: 'pending' }
    ]
  },
  {
    id: 6,
    name: 'E-commerce Platform',
    description: 'Online shopping platform with payment integration',
    status: 'active',
    priority: 'low',
    startDate: '2024-02-15',
    endDate: '2024-06-30',
    manager: 'Amanda Foster',
    // team: ['Lucas Brown', 'Olivia Taylor', 'Ethan Davis'],
    budget: '$85,000',
    tasks: [
      { id: 17, title: 'Product catalog', status: 'completed' },
      { id: 18, title: 'Shopping cart', status: 'pending' },
      { id: 19, title: 'Payment gateway', status: 'pending' }
    ]
  },
  {
    id: 7,
    name: 'DevOps Pipeline',
    description: 'CI/CD pipeline setup and automation',
    status: 'completed',
    priority: 'medium',
    startDate: '2023-11-15',
    endDate: '2024-01-15',
    manager: 'Michael Rodriguez',
    // team: ['Grace Liu', 'Nathan Wright'],
    budget: '$20,000',
    tasks: [
      { id: 20, title: 'Pipeline setup', status: 'completed' },
      { id: 21, title: 'Automated testing', status: 'completed' },
      { id: 22, title: 'Deployment automation', status: 'completed' }
    ]
  },
  {
    id: 8,
    name: 'Data Analytics Dashboard',
    description: 'Business intelligence dashboard for data visualization',
    status: 'active',
    priority: 'low',
    startDate: '2024-01-20',
    endDate: '2024-04-20',
    manager: 'Victoria Chang',
    // team: ['Benjamin Clark', 'Isabella Martinez', 'Jacob Wilson'],
    budget: '$35,000',
    tasks: [
      { id: 23, title: 'Data collection setup', status: 'completed' },
      { id: 24, title: 'Dashboard design', status: 'pending' },
      { id: 25, title: 'Chart implementation', status: 'pending' }
    ]
  }
]

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(sampleProjects.length / itemsPerPage)
  
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = sampleProjects.slice(startIndex, endIndex)

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Project Management
        </h1>
        <p className="text-gray-600 text-lg">Manage and track all your projects in one place</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Project List</h3>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
                + Add Project
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Project</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Priority</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Manager</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Budget</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Timeline</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentProjects.map((project, index) => (
                <tr key={project.id} className={`transition-colors group ${
                  index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">{project.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{project.name}</div>
                        <div className="text-xs text-gray-500">{project.description.substring(0, 50)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'active' ? 'bg-green-100 text-green-800 border border-green-200' :
                      project.status === 'completed' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        project.status === 'active' ? 'bg-green-500' :
                        project.status === 'completed' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></span>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.priority === 'high' ? 'bg-red-100 text-red-800 border border-red-200' :
                      project.priority === 'medium' ? 'bg-orange-100 text-orange-800 border border-orange-200' :
                      'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        project.priority === 'high' ? 'bg-red-500' :
                        project.priority === 'medium' ? 'bg-orange-500' : 'bg-gray-500'
                      }`}></span>
                      {project.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">{project.manager.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-900">{project.manager}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm font-medium text-gray-900">{project.budget}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-900">{project.startDate}</div>
                    <div className="text-xs text-gray-500">to {project.endDate}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <EditButton 
                        size="small" 
                        onClick={() => console.log('Edit project:', project.id)}
                      />
                      <DeleteButton 
                        size="small" 
                        onClick={() => console.log('Delete project:', project.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 mb-8 px-4">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(endIndex, sampleProjects.length)} of {sampleProjects.length} results
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPage === page
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              )
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
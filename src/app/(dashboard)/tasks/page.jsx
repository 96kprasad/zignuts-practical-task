'use client'
import { useState } from 'react'
import { EditButton, DeleteButton } from '../../components/action/page'

const sampleTasks = [
  { id: 1, title: 'Complete project setup', status: 'completed', priority: 'high', dueDate: '2024-01-15', project: 'Website Redesign' },
  { id: 2, title: 'Design user interface mockups', status: 'pending', priority: 'medium', dueDate: '2024-01-20', project: 'Mobile App' },
  { id: 3, title: 'Implement user authentication', status: 'pending', priority: 'high', dueDate: '2024-01-18', project: 'Website Redesign' },
  { id: 4, title: 'Write comprehensive unit tests', status: 'pending', priority: 'low', dueDate: '2024-01-25', project: 'API Development' },
  { id: 5, title: 'Deploy to production environment', status: 'completed', priority: 'medium', dueDate: '2024-01-10', project: 'Database Migration' },
  { id: 6, title: 'Setup CI/CD pipeline', status: 'completed', priority: 'high', dueDate: '2024-01-12', project: 'DevOps' },
  { id: 7, title: 'Create API documentation', status: 'pending', priority: 'medium', dueDate: '2024-01-22', project: 'API Development' },
  { id: 8, title: 'Optimize database queries', status: 'pending', priority: 'low', dueDate: '2024-01-28', project: 'Database Migration' },
  { id: 9, title: 'Implement push notifications', status: 'pending', priority: 'medium', dueDate: '2024-01-24', project: 'Mobile App' },
  { id: 10, title: 'Security audit and testing', status: 'completed', priority: 'high', dueDate: '2024-01-08', project: 'Security' },
  { id: 11, title: 'Create responsive design layouts', status: 'pending', priority: 'medium', dueDate: '2024-01-30', project: 'Website Redesign' },
  { id: 12, title: 'Implement payment gateway', status: 'pending', priority: 'high', dueDate: '2024-02-05', project: 'E-commerce' },
  { id: 13, title: 'Setup monitoring and logging', status: 'completed', priority: 'medium', dueDate: '2024-01-14', project: 'DevOps' },
  { id: 14, title: 'Design database schema', status: 'completed', priority: 'high', dueDate: '2024-01-09', project: 'Database Migration' },
  { id: 15, title: 'Implement search functionality', status: 'pending', priority: 'medium', dueDate: '2024-02-01', project: 'Website Redesign' },
  { id: 16, title: 'Create user onboarding flow', status: 'pending', priority: 'low', dueDate: '2024-02-10', project: 'Mobile App' },
  { id: 17, title: 'Setup load balancing', status: 'pending', priority: 'high', dueDate: '2024-02-03', project: 'DevOps' },
  { id: 18, title: 'Implement data validation', status: 'completed', priority: 'medium', dueDate: '2024-01-16', project: 'API Development' },
  { id: 19, title: 'Create admin dashboard', status: 'pending', priority: 'medium', dueDate: '2024-02-08', project: 'Website Redesign' },
  { id: 20, title: 'Setup backup and recovery', status: 'pending', priority: 'high', dueDate: '2024-02-02', project: 'Database Migration' },
  { id: 21, title: 'Implement real-time chat', status: 'pending', priority: 'low', dueDate: '2024-02-15', project: 'Mobile App' },
  { id: 22, title: 'Performance optimization', status: 'completed', priority: 'medium', dueDate: '2024-01-20', project: 'Website Redesign' },
  { id: 23, title: 'Setup error tracking', status: 'pending', priority: 'medium', dueDate: '2024-02-06', project: 'DevOps' },
  { id: 24, title: 'Implement file upload system', status: 'pending', priority: 'low', dueDate: '2024-02-12', project: 'API Development' },
  { id: 25, title: 'Create email notification system', status: 'completed', priority: 'high', dueDate: '2024-01-18', project: 'E-commerce' }
]

export default function TasksPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(sampleTasks.length / itemsPerPage)
  
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTasks = sampleTasks.slice(startIndex, endIndex)

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 text-lg">Organize, track, and manage all your tasks in one place</p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Task List</h3>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
                + Add Task
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
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Task</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Priority</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Due Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Project</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm capitalize tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentTasks.map((task, index) => (
                <tr key={task.id} className={`transition-colors group ${
                  index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-medium ${
                          task.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`}>
                          {task.status === 'completed' ? '✓' : index + startIndex + 1}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{task.title}</div>
                        <div className="text-xs text-gray-500">ID: #{task.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'completed' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        task.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      {task.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800 border border-red-200' :
                      task.priority === 'medium' ? 'bg-orange-100 text-orange-800 border border-orange-200' :
                      'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-orange-500' : 'bg-gray-500'
                      }`}></span>
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-900">{task.dueDate}</div>
                    <div className="text-xs text-gray-500">Due date</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-indigo-600">{task.project.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-900">{task.project}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <EditButton 
                        size="small" 
                        onClick={() => console.log('Edit task:', task.id)}
                      />
                      <DeleteButton 
                        size="small" 
                        onClick={() => console.log('Delete task:', task.id)}
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
            Showing {startIndex + 1} to {Math.min(endIndex, sampleTasks.length)} of {sampleTasks.length} results
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
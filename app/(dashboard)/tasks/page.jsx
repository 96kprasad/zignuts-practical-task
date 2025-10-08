import TaskTable from '../../../components/task/TaskTable'

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
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 text-lg">Organize, track, and manage all your tasks in one place</p>
      </div>
      <TaskTable tasks={sampleTasks} />
    </div>
  )
}
import ProjectTable from '../../../components/project/ProjectTable'

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
  return (
    <div className="p-6 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Project Management
        </h1>
        <p className="text-gray-600 text-lg">Manage and track all your projects in one place</p>
      </div>
      <ProjectTable projects={sampleProjects} />
    </div>
  )
}
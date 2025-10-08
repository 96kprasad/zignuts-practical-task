'use client'
import Header from '../components/header/page'
import Sidebar from '../components/sidebar/page'
import ProtectedRoute from '../components/ProtectedRoute'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <Header />
        <main className="dashboard-layout">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  )
}
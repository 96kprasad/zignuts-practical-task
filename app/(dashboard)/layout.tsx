'use client'
import Header from '../../components/header/page'
import Sidebar from '../../components/sidebar/page'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64"></div>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
      </div>
    </div>
  )
}
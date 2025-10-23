import React from 'react'
import StudentsList from './pages/StudentsList'
import AddExam from './pages/AddExam'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">ZTRACK - Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudentsList />
          <AddExam />
        </div>
      </div>
    </div>
  )
}

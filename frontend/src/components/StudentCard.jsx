import React from 'react'

export default function StudentCard({student, onView}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{student.first_name} {student.last_name}</h3>
      {student.email && <p className="text-sm text-gray-500">{student.email}</p>}
      <div className="mt-3 flex gap-2">
        <button onClick={() => onView(student)} className="px-3 py-1 bg-blue-500 text-white rounded">Ver notas</button>
      </div>
    </div>
  )
}

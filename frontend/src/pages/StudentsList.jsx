import React, {useEffect, useState} from 'react'
import axios from 'axios'
import StudentCard from '../components/StudentCard'

export default function StudentsList(){
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)
  const [notes, setNotes] = useState([])

  // Usar localhost:8000 ya que el backend está expuesto en ese puerto
  const API = 'http://localhost:8000'
  
  console.log('API URL:', API)

  useEffect(()=>{ fetchStudents() }, [])

  async function fetchStudents(){
    setLoading(true)
    try{
      console.log('Fetching students from:', `${API}/api/students/`)
      const res = await axios.get(`${API}/api/students/`)
      console.log('Response:', res.data)
      setStudents(res.data)
    }catch(e){
      console.error('Error fetching students:', e)
      console.error('Error details:', e.response?.data)
      alert('Error cargando estudiantes')
    }finally{ setLoading(false) }
  }

  async function handleView(student){
    setSelected(student)
    try{
      const res = await axios.get(`${API}/api/exams/${student.id}`)
      setNotes(res.data)
    }catch(e){
      console.error(e)
      alert('Error cargando notas')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Estudiantes</h2>
      <div className="space-y-3">
        {loading && <p>Cargando...</p>}
        {students.map(s => <StudentCard key={s.id} student={s} onView={handleView} />)}
      </div>

      {selected && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Notas de {selected.first_name} {selected.last_name}</h3>
          {notes.length === 0 ? <p className="text-sm text-gray-500">No hay notas</p> :
            <ul className="mt-2">
              {notes.map(n => <li key={n.id}>{n.subject}: {n.score}</li>)}
            </ul>
          }
        </div>
      )}
    </div>
  )
}

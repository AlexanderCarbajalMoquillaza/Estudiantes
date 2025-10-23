import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AddExam(){
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState('')
  const [subject, setSubject] = useState('')
  const [score, setScore] = useState('')
  const API = 'http://localhost:8000'

  useEffect(()=>{ fetchStudents() }, [])

  async function fetchStudents(){
    try{
      const res = await axios.get(`${API}/api/students/`)
      setStudents(res.data)
      if(res.data.length>0) setStudentId(res.data[0].id)
    }catch(e){
      console.error(e)
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!studentId || !subject || score==='') { alert('Completa todos los campos'); return }
    try{
      const payload = { student_id: studentId, subject, score: parseFloat(score) }
      await axios.post(`${API}/api/exams/`, payload)
      alert('Nota registrada')
      setSubject(''); setScore('')
    }catch(e){
      console.error(e)
      alert('Error guardando nota')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Agregar Nota</h2>
      <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-sm">Estudiante</label>
          <select value={studentId} onChange={e=>setStudentId(e.target.value)} className="w-full border p-2 rounded">
            {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm">Asignatura</label>
          <input value={subject} onChange={e=>setSubject(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Nota (0-20)</label>
          <input value={score} onChange={e=>setScore(e.target.value)} type="number" step="0.1" min="0" max="20" className="w-full border p-2 rounded" />
        </div>
        <div>
          <button className="px-4 py-2 bg-green-600 text-white rounded">Guardar</button>
        </div>
      </form>
    </div>
  )
}

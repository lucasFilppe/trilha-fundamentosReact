import './styles.css'
import Card from '../../components/Card/index'
import React, { useState } from 'react'

function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }
  return (
    <div className="container">
      <h1>Lista de presenças</h1>
      <h2>Nome:{studentName}</h2>
      <input
        type="text"
        placeholder="Digite o seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map(student => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  )
}

export default Home

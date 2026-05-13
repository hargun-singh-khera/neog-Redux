import React from 'react'
import Navbar from './components/Navbar'
import StudentView from "./features/students/StudentView"

const App = () => {
  return (
    <div>
        <Navbar />
        <StudentView />
    </div>
  )
}

export default App
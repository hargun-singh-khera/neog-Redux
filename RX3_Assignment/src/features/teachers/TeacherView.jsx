import React from 'react'
import { Link } from 'react-router-dom'
import TeacherList from '../../components/TeacherList'

const TeacherView = () => {
  return (
    <div>
        <div className="my-4 px-5">
            <h1>Student View</h1>
            <Link to={"/teacher/add"} className="btn btn-warning">Add Teacher</Link>
            <TeacherList />
        </div>
    </div>
  )
}

export default TeacherView
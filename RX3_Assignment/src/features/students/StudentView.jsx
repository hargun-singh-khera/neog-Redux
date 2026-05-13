import React from 'react'
import { Link } from "react-router-dom";
import StudentList from '../../components/StudentList';

const StudentView = () => {
    return (
        <div className="my-4 px-5">
            <h1>Student View</h1>
            <Link to={"/add"} className="btn btn-warning">Add Student</Link>
            <StudentList />
        </div>
    )
}

export default StudentView
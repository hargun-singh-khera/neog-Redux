import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from '../features/students/studentsSlice';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const dispatch = useDispatch();
    const { students, status, error } = useSelector(state => state.students);
    console.log("students", students)

    useEffect(() => {
        dispatch(fetchStudents());
    }, [])

    return (
        <div>
            <h2>Student List</h2>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {students?.map(student => (
                    <li><Link to={`/student/${student._id}`}>{student.name} ({student.age})</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList
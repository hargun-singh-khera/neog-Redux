import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteStudentAsync, fetchStudents } from '../features/students/studentsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';

const StudentDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const { students } = useSelector(state => state.students);
    console.log("students", students)

    useEffect(() => {
        dispatch(fetchStudents());
    }, [])

    const studentData = students.find(student => student._id === id);
    console.log("studentData", studentData)

    const handleDelete = () => {
        dispatch(deleteStudentAsync(studentData._id));
        setTimeout(() => {
            navigate(-1);
        }, 1000)
    }

    return (
        <>
            <Navbar />
            <div className="my-4 px-5">
                <div>
                    <h2>Student Detail</h2>
                    <p>Name: {studentData?.name}</p>
                    <p>Age: {studentData?.age}</p>
                    <p>Grade: {studentData?.grade}</p>
                    <p>Attendance: {studentData?.attendance}</p>
                    <p>Marks: {studentData?.marks}</p>
                </div>
                <div className="d-flex gap-2">
                    <Link to={"/add"} state={{ student: studentData }} className="btn btn-warning">Edit Details</Link>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default StudentDetail
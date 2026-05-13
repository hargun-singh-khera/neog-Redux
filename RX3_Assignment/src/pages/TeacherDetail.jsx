import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import { deleteTeacherAsync, fetchTeachers } from '../features/teachers/teachersSlice';

const TeacherDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const { teachers } = useSelector(state => state.teachers);
    console.log("teachers", teachers)

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [])

    const teacherData = teachers.find(teacher => teacher._id === id);
    console.log("teacherData", teacherData)

    const handleDelete = () => {
        dispatch(deleteTeacherAsync(teacherData._id));
        setTimeout(() => {
            navigate(-1);
        }, 1000)
    }

    return (
        <>
            <Navbar />
            <div className="my-4 px-5">
                <div>
                    <h2>Teacher Detail</h2>
                    <p>Name: {teacherData?.name}</p>
                    <p>Age: {teacherData?.age}</p>
                    <p>Gender: {teacherData?.gender}</p>
                    <p>Subjects: {teacherData?.subjects?.join(", ")}</p>
                </div>
                <div className="d-flex gap-2">
                    <Link to={"/teacher/add"} state={{ teacher: teacherData }} className="btn btn-warning">Edit Details</Link>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default TeacherDetail
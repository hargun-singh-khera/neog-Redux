import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchTeachers } from '../features/teachers/teachersSlice';

const TeacherList = () => {
    const dispatch = useDispatch();
    const { teachers, status, error } = useSelector(state => state.teachers);
    console.log("teachers", teachers)

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [])

    return (
        <div>
            <h2>Teachers List</h2>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {teachers?.map(teacher => (
                    <li><Link to={`/teacher/${teacher._id}`}>{teacher.name} ({teacher.age})</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default TeacherList
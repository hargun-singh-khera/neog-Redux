import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from '../features/students/studentsSlice';
import { fetchTeachers } from '../features/teachers/teachersSlice';

const SchoolView = () => {
    const dispatch = useDispatch();
    const { students, status, error } = useSelector(state => state.students);
    const { teachers } = useSelector(state => state.teachers);

    useEffect(() => {
        dispatch(fetchStudents())
        dispatch(fetchTeachers())
    }, [])

    console.log("students", students)

    const totalAttendance = students.reduce((acc, curr) => acc + curr.attendance, 0);
    const totalMarks = students.reduce((acc, curr) => acc + curr.marks , 0);

    const avgAttendance = totalAttendance / students?.length;
    const avgMarks = totalMarks / students?.length;

    const topperStudent = students.reduce((acc, curr) => curr.marks > acc.marks ? curr : acc, students[0]);
    console.log("topperStudent", topperStudent)

    return (
        <div className="my-4 px-5">
            <h1>School View</h1>
            <p>Total Teachers: {teachers?.length}</p>
            <p>Total Students: {students?.length}</p>
            <p>Average Attendance: {avgAttendance.toFixed(2)}</p>
            <p>Average Marks: {avgMarks.toFixed(2)}</p>
            <p>Top Student: {topperStudent?.name}</p>
        </div>
    )
}

export default SchoolView
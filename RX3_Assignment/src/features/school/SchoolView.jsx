import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from '../students/studentsSlice';
import { fetchTeachers } from '../teachers/teachersSlice';
import { setTopStudent, updateSchoolStats } from './schoolSlice';

const SchoolView = () => {
    const dispatch = useDispatch();
    const { students, status, error } = useSelector(state => state.students);
    const { teachers } = useSelector(state => state.teachers);

    useEffect(() => {
        dispatch(fetchStudents())
        dispatch(fetchTeachers())
    }, [])

    useEffect(() => {
        if (!students.length) return;
        console.log("students.length", students.length)
        const totalStudents = students.length;
        const totalTeachers = teachers.length;
        const totalAttendance = students.reduce((acc, curr) => acc + curr.attendance, 0);
        const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

        const avgAttendance = totalAttendance / students?.length;
        const avgMarks = totalMarks / students?.length;

        const topPerformer = students.reduce((acc, curr) => curr.marks > acc.marks ? curr : acc, students[0]);
       
        dispatch(updateSchoolStats({ totalStudents, totalTeachers, avgAttendance, avgMarks }))
        dispatch(setTopStudent(topPerformer))
    }, [students, teachers])

    const { totalStudents, totalTeachers, avgAttendance, avgMarks, topPerformer } = useSelector(state => state.school.schoolStats);

    const topperStudent = useSelector(state => state.school.topPerformer);

    return (
        <div className="my-4 px-5">
            <h1>School View</h1>
            <p>Total Teachers: {totalTeachers}</p>
            <p>Total Students: {totalStudents}</p>
            <p>Average Attendance: {avgAttendance?.toFixed(2)}</p>
            <p>Average Marks: {avgMarks?.toFixed(2)}</p>
            <p>Top Student: {topperStudent?.name || "-"}</p>
        </div>
    )
}

export default SchoolView
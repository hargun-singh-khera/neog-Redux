import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, setFilter, setSortBy } from '../features/students/studentsSlice';
import Navbar from './Navbar';

const ClassView = () => {
    const dispatch = useDispatch();
    const { students, filter, sortBy, status, error } = useSelector(state => state.students);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [])

    // console.log("students", students)

    const filteredStudents = filter === "All" ? students : students.filter(student => student.gender === filter);

    const sortedStudents = [...filteredStudents];
    if (sortBy === "Name") {
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "Marks") {
        sortedStudents.sort((a, b) => a.marks - b.marks);
    }
    else {
        sortedStudents.sort((a, b) => a.attendance - b.attendance);
    }

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value))
    }


    return (

        <div className="my-4 px-5">
            <h1>Class View</h1>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Filter by Gender:</label>
                <select onChange={handleFilterChange} class="form-select" aria-label="Default select example">
                    <option selected value="All">All</option>
                    <option value="Male">Boys</option>
                    <option value="Female">Girls</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Sort by:</label>
                <select onChange={handleSortChange} class="form-select" aria-label="Default select example">
                    <option selected value="Name">Name</option>
                    <option value="Marks">Marks</option>
                    <option value="Attendance">Attendance</option>
                </select>
            </div>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {sortedStudents.length === 0 && <p>No students found</p>}
            <ul>
                {sortedStudents?.map(student => (
                    <li>{student.name} - {student.gender} - Marks: {student.marks} - Attendance: {student.attendance}</li>
                ))}
            </ul>
        </div>

    )
}

export default ClassView
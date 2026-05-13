import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { addStudentAsync, updateStudentAsync } from '../features/students/studentsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const StudentForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.students);
    const location = useLocation();
    const navigate = useNavigate();

    const student = location.state?.student;
    // console.log("student", student)
    const isUpdate = student ? true : false;

    const [formData, setFormData] = useState({
        name: student?.name || "",
        age: student?.age || 0,
        grade: student?.grade || "",
        gender: student?.gender || "",
        attendance: student?.attendance || 0,
        marks: student?.marks || 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age, grade, gender } = formData;
        if (!name?.trim() || !grade?.trim() || !gender?.trim()) {
            toast.error("Please fill all the fields");
            return;
        }
        if (isUpdate) {
            dispatch(updateStudentAsync({ ...formData, id: student._id }));
            console.log("updated succesfully")
            toast.success("Updated Successfully");
        }
        else {
            dispatch(addStudentAsync(formData));
            toast.success("Added Successfully");
        }

        setTimeout(() => {
            navigate(-1);
        }, 200);

        // console.log("Form Submitted", formData);

        setFormData({
            name: "",
            age: 0,
            grade: "",
            gender: "",
            attendance: 0,
            marks: 0
        });
    }

    // console.log("formData", formData);

    return (
        <div className="my-4 px-5">
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., John Doe" />
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" min={0} max={100} class="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
                </div>

                <div class="mb-3">
                    <label for="grade" class="form-label">Grade</label>
                    <input type="text" class="form-control" id="grade" name="grade" value={formData.grade} onChange={handleChange} placeholder="e.g., A" />
                </div>

                <div class="mb-3 d-flex gap-3">
                    <label for="grade" class="form-label">Gender:</label>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} id="male" />
                        <label class="form-check-label" for="male">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} id="female" />
                        <label class="form-check-label" for="female">
                            Female
                        </label>
                    </div>
                </div>

                {isUpdate && (
                    <>
                        <div class="mb-3">
                            <label for="attendance" class="form-label">Attendance</label>
                            <input type="number" min={0} max={100} class="form-control" id="attendance" name="attendance" value={formData.attendance} onChange={handleChange} />
                        </div>

                        <div class="mb-3">
                            <label for="marks" class="form-label">Marks</label>
                            <input type="number" min={0} max={100} class="form-control" id="marks" name="marks" value={formData.marks} onChange={handleChange} />
                        </div>
                    </>
                )}
                
                <button type="submit" className="btn btn-primary">{isUpdate ? "Update Student" : "Add Student"}</button>
            </form>
            <Toaster />
        </div>
    )
}

export default StudentForm
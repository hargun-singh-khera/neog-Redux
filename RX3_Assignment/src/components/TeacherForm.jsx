import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { addTeacherAsync, updateTeacherAsync } from '../features/teachers/teachersSlice';

const TeacherForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.teachers);
    const location = useLocation();
    const navigate = useNavigate();

    const teacher = location.state?.teacher;
    // console.log("teacher", teacher)
    const isUpdate = teacher ? true : false;

    const [formData, setFormData] = useState({
        name: teacher?.name || "",
        age: teacher?.age || 0,
        gender: teacher?.gender || "",
        subjects: teacher?.subjects || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    console.log("formData", formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age, gender, subjects } = formData;
        
        if (!name?.trim() || !gender?.trim()) {
            toast.error("Please fill all the fields");
            return;
        }
        if (isUpdate) {
            dispatch(updateTeacherAsync({ ...formData, id: teacher._id, subjects: subjects?.split(", ") }));
            console.log("updated succesfully")
            toast.success("Updated Successfully");
        }
        else {
            dispatch(addTeacherAsync({...formData, subjects: subjects?.split(", ")}));
            toast.success("Added Successfully");
        }

        setTimeout(() => {
            navigate(-1);
        }, 200);

        // console.log("Form Submitted", formData);

        setFormData({
            name: "",
            age: 0,
            gender: "",
        });
    }

    // console.log("formData", formData);

    return (
        <div className="my-4 px-5">
            <h2>Add Teacher</h2>

            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., John Doe" />
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" min={0} max={100} class="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
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

                <div class="mb-3">
                    <label for="subjects" class="form-label">Subjects</label>
                    <input type="text" class="form-control" id="subjects" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="e.g., Mathematics, English, Physics, etc." />
                </div>
                
                <button type="submit" className="btn btn-primary">{isUpdate ? "Update Teacher" : "Add Teacher"}</button>
            </form>
            <Toaster />
        </div>
    )
}

export default TeacherForm
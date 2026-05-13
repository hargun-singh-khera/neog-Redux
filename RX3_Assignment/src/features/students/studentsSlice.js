import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    const response = await axios.get("http://localhost:3000/students")
    console.log("response of fetch", response)
    return response.data
})

export const addStudentAsync = createAsyncThunk("students/addStudent", async (student) => {
    const response = await axios.post("http://localhost:3000/students", student)
    console.log("response of add", response)
    return response.data
})

export const updateStudentAsync = createAsyncThunk("students/updateStudent", async (student) => {
    console.log("student update thunk", student)
    const response = await axios.post(`http://localhost:3000/students/${student.id}`, student)
    console.log("response of update", response)
    return response.data
})

export const deleteStudentAsync = createAsyncThunk("students/deleteStudent", async (id) => {
    const response = await axios.delete(`http://localhost:3000/students/${id}`)
    console.log("response of delete", response)
    return response.data
})

export const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        status: "idle",
        error: null,
        filter: "All",
        sortBy: "Name",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSortBy: (state, action) => {
            console.log("action.payload", action.payload)
            state.sortBy = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.status = "success"
            console.log("action.payload", action.payload)
            state.students = action.payload
        })
        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(addStudentAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addStudentAsync.fulfilled, (state, action) => {
            state.students = [...state.students, action.payload]
        })
        builder.addCase(addStudentAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(updateStudentAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(updateStudentAsync.fulfilled, (state, action) => {
            state.status = "success"
            const index = state.students.findIndex(student => student._id === action.payload.id)
            state.students[index] = action.payload
        })
        builder.addCase(updateStudentAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(deleteStudentAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
            console.log("action.payload",action.payload)
            state.students = state.students.filter(student => student._id !== action.payload.id)
        })
        builder.addCase(deleteStudentAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
    }
})

export const { setFilter, setSortBy } = studentsSlice.actions;

export default studentsSlice.reducer;
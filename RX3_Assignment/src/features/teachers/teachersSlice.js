import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk("teachers/fetchTeachers", async () => {
    const response = await axios.get("https://neog-redux-backend.vercel.app/teachers")
    console.log("response of fetch", response)
    return response.data
})

export const addTeacherAsync = createAsyncThunk("teachers/addTeacher", async (teacher) => {
    const response = await axios.post("https://neog-redux-backend.vercel.app/teachers", teacher)
    console.log("response of add", response)
    return response.data
})

export const updateTeacherAsync = createAsyncThunk("teachers/updateTeacher", async (teacher) => {
    console.log("teacher update thunk", teacher)
    const response = await axios.post(`https://neog-redux-backend.vercel.app/teachers/${teacher.id}`, teacher)
    console.log("response of update", response)
    return response.data
})

export const deleteTeacherAsync = createAsyncThunk("teachers/deleteTeacher", async (id) => {
    const response = await axios.delete(`https://neog-redux-backend.vercel.app/teachers/${id}`)
    console.log("response of delete", response)
    return response.data
})

export const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        teachers: [],
        status: "idle",
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeachers.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchTeachers.fulfilled, (state, action) => {
            state.status = "success"
            state.teachers = action.payload
        })
        builder.addCase(fetchTeachers.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(addTeacherAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addTeacherAsync.fulfilled, (state, action) => {
            state.status = "success"
            state.teachers = [...state.teachers, action.payload]
        })
        builder.addCase(addTeacherAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(updateTeacherAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(updateTeacherAsync.fulfilled, (state, action) => {
            state.status = "success"
            const index = state.teachers.findIndex(teacher => teacher._id === action.payload.id)
            state.teachers[index] = action.payload
        })
        builder.addCase(updateTeacherAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
        builder.addCase(deleteTeacherAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(deleteTeacherAsync.fulfilled, (state, action) => {
            state.status = "success"
            state.teachers = state.teachers.filter(teacher => teacher._id !== action.payload.id)
        })
        builder.addCase(deleteTeacherAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
    }
})

export default teachersSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const schoolSlice = createSlice({
    name: "school",
    initialState: {
        schoolStats: {
            totalStudents: 0,
            totalTeachers: 0,
            avgAttendance: 0,
            avgMarks: 0,
            topPerformer: ""
        }
    },
    reducers: {
        updateSchoolStats: (state, action) => {
            state.schoolStats = action.payload
        },
        setTopStudent: (state, action) => {
            state.topPerformer = action.payload
        } 
    }
});

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions;

export default schoolSlice.reducer;
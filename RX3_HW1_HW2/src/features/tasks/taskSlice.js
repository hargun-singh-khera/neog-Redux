import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk ("tasks/fetchTasks", async () => {
    const response = await axios.get("https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks") 
    console.log("response", response)
    return response.data
}) 

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        status: "idle",
        error: null,
    },
    reducers: {
        toggleStatus : (state, action) => {
            state.tasks.forEach((task, index) => {
                const taskIndex = task.tasks.findIndex(task => task.taskId === action.payload)
                if (taskIndex !== -1) task.tasks[taskIndex].taskStatus = task.tasks[taskIndex].taskStatus === "Pending" ? "Completed" : "Pending" 
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = "success"
            state.tasks = action.payload.tasks
        })
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload.message
        })
    }
})

export const { toggleStatus } = taskSlice.actions

export default taskSlice.reducer
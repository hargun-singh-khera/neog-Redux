import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
            {
                id: 1,
                name: "Get Groceries from the market",
                date: "15/07/2024",
                completed: false,
            },
            {
                id: 2,
                name: "Go to Gym",
                date: "15/07/2024",
                completed: true,
            },
            {
                id: 3,
                name: "Water the plants",
                date: "15/07/2024",
                completed: true
            },
            {
                id: 4,
                name: "Go to the park",
                date: "16/07/2024",
                completed: true,
            },
            {
                id: 5,
                name: "Get my room cleaned",
                date: "16/07/2024",
                completed: false
            }

        ]
    },
    reducers: {
        toggleStatus: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
        }
    }
})

export const { toggleStatus } = taskSlice.actions

export default taskSlice.reducer
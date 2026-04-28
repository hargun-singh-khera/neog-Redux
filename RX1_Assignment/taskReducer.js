import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, CALCULATE_TOTAL_TASKS } from "./actions";
const initialState = { tasks: [], totalTasks: 0 };

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload, status: false }]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index != action.payload)
            }
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, index) => index === action.payload ? { ...task, status: !task.status } : task)
            }
        case CALCULATE_TOTAL_TASKS:
            return {
                ...state,
                totalTasks: state.tasks.length
            }
        default:
            return state
    }
}

export default taskReducer
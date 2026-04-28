export const ADD_TASK = "task/added";
export const REMOVE_TASK = "task/removed";
export const TOGGLE_TASK = "task/toggled";
export const CALCULATE_TOTAL_TASKS = "tasks/calculateTotalTasks";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
})

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id,
})

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
})

export const calculateTotalTasks = () => ({
    type: CALCULATE_TOTAL_TASKS,
})
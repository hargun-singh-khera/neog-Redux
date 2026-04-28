import { createStore } from "redux";
import taskReducer from "./taskReducer";
import { addTask, calculateTotalTasks, removeTask, toggleTask } from "./actions";

const store = createStore(taskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log(store.getState())
    updateTask()
})

const taskLabel = document.querySelector("#taskLabel");
const taskDescription = document.querySelector("#taskDescription");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const removeTaskId = document.querySelector("#removeTaskId");
const removeTaskBtn = document.querySelector("#removeTaskBtn");
const totalTasks = document.querySelector("#totalTasks");

const addTaskHandler = () => {
    console.log("adding task")
    const label = taskLabel.value;
    const description = taskDescription.value;
    if (label && description) {
        store.dispatch(addTask({ label, description }));
        store.dispatch(calculateTotalTasks())
    }
}

const removeTaskHandler = () => {
    const id = removeTaskId.value;
    if (id) {
        store.dispatch(removeTask(id-1));
        store.dispatch(calculateTotalTasks())
    }
}



addTaskBtn.addEventListener("click", addTaskHandler);
removeTaskBtn.addEventListener("click", removeTaskHandler);

window.toggleTaskHandler = (index) => {
    store.dispatch(toggleTask(index));
}

const renderTasks = () => {
    const state = store.getState();
    taskList.innerHTML = state.tasks.map((task, index) => `<li><input type="checkbox" onchange="toggleTaskHandler(${index})" ${task.status ? "checked" : ""} />${index+1}. ${task.label}: ${task.description}: ${task.status ? "Completed" : ""}</li>`).join("")
}

const updateTask = () => {
    const state = store.getState();
    renderTasks();
    totalTasks.textContent = state.totalTasks;
}

updateTask()
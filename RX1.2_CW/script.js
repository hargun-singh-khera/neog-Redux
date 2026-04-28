import { createStore } from "redux";
import todosReducer from "./todoReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log(store.getState())
    updateTodoList()
})

const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () => {
    const todoValue = todoInput.value;
    if (todoValue) {
        store.dispatch(addTodo(todoValue));
    }
}

addTodoBtn.addEventListener("click", addTodoHandler);

window.removeTodoHandler = (index) => {
    store.dispatch(removeTodo(index));
}

const updateTodoList = () => {
    const state = store.getState();
    todoList.innerHTML = state.todos.map((todo, index) => { return `<li>${todo} <button onClick="removeTodoHandler(${index})">Remove</button></li>` }).join("")
}

updateTodoList();
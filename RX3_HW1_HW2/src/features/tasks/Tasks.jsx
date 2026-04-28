import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggleStatus } from './taskSlice'

const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    console.log(tasks)
  return (
    <div>
        <h1>My Task List</h1>
        <h2>15/07/2024</h2>
        <ul>
            {tasks.tasks.filter(task => task.date === "15/07/2024").map(task => (
                <li key={task.id}>
                    <p>
                        {task.name} {" "}
                        <button onClick={() => dispatch(toggleStatus(task.id))}>{task.completed ? "Completed" : "Pending"}</button>
                    </p>
                    {/* <p>Status: {task.completed ? "Completed" : "Pending"}</p> */}
                </li>
            ))}
        </ul>
        <h2>16/07/2024</h2>
        <ul>
            {tasks.tasks.filter(task => task.date === "16/07/2024").map(task => (
                <li key={task.id}>
                    <p>
                        {task.name} {" "}
                        <button onClick={() => dispatch(toggleStatus(task.id))}>{task.completed ? "Completed" : "Pending"}</button>
                    </p>
                    {/* <p>Status: {task.completed ? "Completed" : "Pending"}</p> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Tasks
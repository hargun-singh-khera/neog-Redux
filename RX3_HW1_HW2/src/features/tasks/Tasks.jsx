import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchTasks, toggleStatus } from './taskSlice'

const Tasks = () => {
    const dispatch = useDispatch()
    const { tasks, status, error } = useSelector(state => state.tasks)
    console.log("tasks", tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

  return (
    <div>
        <h1>My Task List</h1>
        <h2>{tasks[0]?.date}</h2>
        <ul>
            {tasks[0]?.tasks?.map(task => (
                <li key={task.taskId}>
                    <p>
                        {task.task} {" "}
                        <button onClick={() => dispatch(toggleStatus(task.taskId))}>{task.taskStatus}</button>
                    </p>
                </li>
            ))}
        </ul>
        <h2>{tasks[1]?.date}</h2>
        <ul>
            {tasks[1]?.tasks?.map(task => (
                <li key={task.taskId}>
                    <p>
                        {task.task} {" "}
                        <button onClick={() => dispatch(toggleStatus(task.taskId))}>{task.taskStatus}</button>
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Tasks
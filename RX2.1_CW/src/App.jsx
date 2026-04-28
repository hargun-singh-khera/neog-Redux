import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  }

  return (
    <main>
      <div>Counter: {counter}</div>
      <button onClick={(e) => handleClick('add')}>Add</button>
      <button onClick={(e) => handleClick('minus')}>Minus</button>
    </main>
  )
}

export default App

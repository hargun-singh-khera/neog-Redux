import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import IncomeExpenseForm from './components/IncomeExpenseForm'
import FinanceSummary from './components/FinanceSummary'

function App() {

  return (
    <>
      <IncomeExpenseForm />
      <FinanceSummary />
    </>
  )
}

export default App

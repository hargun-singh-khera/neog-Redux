import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from '../actions';

const Expense = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    useEffect(() => {
        dispatch(fetchExpenses());
    }, []);

    return (
        <div>
            <h1>Expenses Page</h1>
            <ul>
                {expenses.map((salary, index) => (
                    <li key={index}>{salary.description}: ${salary.amount}</li>
                ))}
            </ul>
            <h2>Expense Total: ${totalExpenses}</h2>
        </div>
    )
}

export default Expense
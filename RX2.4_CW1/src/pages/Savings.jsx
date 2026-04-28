import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, fetchIncome } from '../actions';

const Savings = () => {

    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);
    const income = useSelector((state) => state.income);

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    const totalSavings = totalIncome - totalExpenses;

    useEffect(() => {
        dispatch(fetchIncome());
    }, []);

    useEffect(() => {
        dispatch(fetchExpenses());
    }, []);

    return (
        <div>
            <h1>Savings Page</h1>
            <h2>Savings Total: ${totalSavings}</h2>
        </div>
    )
}

export default Savings
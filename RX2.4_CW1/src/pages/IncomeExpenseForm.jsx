import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addEntry, addExpense } from "../actions";

const IncomeExpenseForm = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [entryType, setEntryType] = useState("income");

    const handleAddEntry = (e) => {
        e.preventDefault();
        if (entryType === "income") {
            dispatch(addEntry({ description, amount: parseFloat(amount), entryType }));
        }
        else {
            dispatch(addExpense({ description, amount: parseFloat(amount), entryType }));
        }
        setDescription("");
        setAmount("");
        setEntryType("income");
    }

    return (
        <div>
            <h1>New Entry Page</h1>
            <form action="">
                <div>
                    <label>Dsecription</label>
                    <br />
                    <input 
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Amount</label>
                    <br />
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Entry Type</label>
                    <br />
                    <select 
                        value={entryType}
                        onChange={(e) => setEntryType(e.target.value)}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <br />
                <button onClick={handleAddEntry}>Add Entry</button>
            </form>
        </div>
    )
}

export default IncomeExpenseForm
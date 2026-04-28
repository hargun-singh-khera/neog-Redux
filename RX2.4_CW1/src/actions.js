export const addEntry = (entry) => async(dispatch) => {
    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-income", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entry)
        })
        const data = await response.json();
        if (data.success) {
            dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data })
        }
    } catch (error) {
        console.error("Error adding entry:", error)
    }
}

export const addExpense = (entry) => async(dispatch) => {
    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-expense", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entry)
        })
        const data = await response.json();
        if (data.success) {
            dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data })
        }
    } catch (error) {
        console.error("Error adding entry:", error)
    }
}

export const fetchIncome = () => async (dispatch) => {
    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/income")
        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("Error fetching income:", error)
    }
}

export const fetchExpenses = () => async (dispatch) => {
    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/expenses")
        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_EXPENSE_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("Error fetching expenses:", error)
    }
}

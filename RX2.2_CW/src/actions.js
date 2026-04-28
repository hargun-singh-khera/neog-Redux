export const addIncome = (amount) => ({
    type: "ADD_INCOME",
    payload: amount,
})

export const addExpense = (amount) => ({
    type: "ADD_EXPENSE",
    payload: amount
})
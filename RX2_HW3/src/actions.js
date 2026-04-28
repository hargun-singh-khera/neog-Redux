export const addItem = (item) => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/add-to-store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        const data = await response.json();
        if (data.success) {
            dispatch({ type: "ADD_TO_STORAGE", payload: data.data })
        }
    } catch(error) {
        console.error("Error adding to storage:", error)
    }
}

export const removeItem = (item) => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        const data = await response.json();
        if (data.success) {
            dispatch({ type: "REMOVE_FROM_STORAGE", payload: data.data })
        }
    } catch(error) {
        console.error("Error removing from storage:", error)
    }
}

export const fetchInventoryItems = () => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/storage-items");
        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("Error fetching inventory items:", error)
    }
}

export const fetchRemovedItems = () => async (dispatch) =>{
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store");
        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_REMOVED_ITEMS_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("Error fetching removed items:", error)
    }
}

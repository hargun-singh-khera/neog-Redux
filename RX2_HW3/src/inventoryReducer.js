const initialState = {
    inventoryItems: [],
    removedItems: [],
}

const inventoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_INVENTORY_SUCCESS":
            return {
                ...state,
                inventoryItems: action.payload
            }
        case "FETCH_REMOVED_ITEMS_SUCCESS":
            return {
                ...state,
                removedItems: action.payload
            }
        case "ADD_TO_STORAGE":
            return {
                ...state,
                inventoryItems: [...state.inventoryItems, action.payload]
            }
        case "REMOVE_FROM_STORAGE":
            return {
                ...state,
                removedItems: [...state.removedItems, action.payload]
            }
        default:
            return state
    }
}

export default inventoryReducer
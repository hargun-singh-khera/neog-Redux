import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./actions"
const initialState = { items: [], total: 0 }

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }        
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item, index) => index != action.payload)
            }
        case CALCULATE_TOTAL:
            return {
                ...state,
                total: state.items.reduce((acc, item) => acc + (item.price*item.quantity), 0)
            }
        default:
            return state
    }
}

export default cartReducer
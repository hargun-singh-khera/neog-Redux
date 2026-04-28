const initialState = { value: 0 }
// a plan for when we need to add or remove a cookie
const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cookies/added':
            return { value: state.value + 1 }
        case 'cookies/removed':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default cookieReducer
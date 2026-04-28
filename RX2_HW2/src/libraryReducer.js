const initialState = {
    books: [],
}

const libraryReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_BOOK":
            return { ...state, books: [...state.books, action.payload] }
        case "REMOVE_BOOK":
            return { ...state, books: state.books.filter(book => book.isbn != action.payload )}
        default:
            return state
    }
}

export default libraryReducer
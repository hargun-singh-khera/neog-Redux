import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"
import inventoryReducer from "./inventoryReducer"

const store = createStore(inventoryReducer, applyMiddleware(thunk))

export default store
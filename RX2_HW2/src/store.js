import { createStore, applyMiddleware } from "redux"
import libraryReducer from "./libraryReducer"
import loggerMiddleware from "./loggerMiddleware"

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware))
export default store
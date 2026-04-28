import { createStore } from "redux";
import cookieReducer from "./cookieReducer";

const store = createStore(cookieReducer);

store.subscribe(() => {
    console.log(store.getState())
    updateCookieCount()
});

const addCookie = document.querySelector("#addCookie")
const removeCookie = document.querySelector("#removeCookie")
const cookieCount = document.querySelector("#cookieCount")

const addCookieHandler = () => {
    store.dispatch({ type: "cookies/added"});
}

const removeCookieHandler = () => {
    store.dispatch({ type: "cookies/removed"});
}

addCookie.addEventListener("click", addCookieHandler);
removeCookie.addEventListener("click", removeCookieHandler);

const updateCookieCount = () => {
    const state = store.getState();
    cookieCount.textContent = state.value
}

updateCookieCount()

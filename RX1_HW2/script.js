import { createStore } from "redux"
import profileReducer from "./profileReducer"
import { addProfile, calculateAverageAge, removeProfile } from "./actions"

const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log(store.getState())
    updateProfiles()
})

const addProfileId = document.querySelector("#addProfileId")
const addName = document.querySelector("#name")
const addAge = document.querySelector("#age")
const addProfileBtn = document.querySelector("#addProfileBtn")
const removeProfileId = document.querySelector("#removeProfileId")
const removeProfileBtn = document.querySelector("#removeProfileBtn")
const profilesList = document.querySelector("#profilesList")
const avgAge = document.querySelector("#avgAge")


const addProfileHandler = () => {
    const id = Number(addProfileId.value);
    const name = addName.value;
    const age = Number(addAge.value);
    const profile = { id, name, age }
    if (id && name && age) {
        store.dispatch(addProfile(profile))
        store.dispatch(calculateAverageAge())
    }
}

const removeProfileHandler = () => {
    const id = removeProfileId.value;
    if (id) {
        store.dispatch(removeProfile(id))
        store.dispatch(calculateAverageAge())
    }
}

addProfileBtn.addEventListener("click", addProfileHandler);
removeProfileBtn.addEventListener("click", removeProfileHandler);   

const updateProfiles = () => {
    const state = store.getState();
    console.log("state", state)
    profilesList.innerHTML = state.profiles.map((profile) => `<li>${profile.name} (${profile.age} years old)</li>`).join("")
    avgAge.textContent = state.averageAge.toFixed(2)
}

updateProfiles()
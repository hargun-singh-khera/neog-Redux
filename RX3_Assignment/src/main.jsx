import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import store from "./app/store.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddStudent from './pages/AddStudent.jsx'
import StudentDetail from './pages/StudentDetail.jsx'
import Classes from './pages/Classes.jsx'
import School from './pages/School.jsx'
import Teachers from './pages/Teachers.jsx'
import AddTeacher from './pages/AddTeacher.jsx'
import TeacherDetail from './pages/TeacherDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/add",
    element: <AddStudent />
  },
  {
    path: "/student/:id",
    element: <StudentDetail />
  },
  {
    path: "/teachers",
    element: <Teachers />
  },
  {
    path: "/teacher/add",
    element: <AddTeacher />
  },
  {
    path: "/teacher/:id",
    element: <TeacherDetail />
  },
  {
    path: "/classes",
    element: <Classes />
  },
  {
    path: "/school",
    element: <School />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
)

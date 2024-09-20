import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddStudent from './components/AddStudent.jsx'
import StudentList from './components/StudentList.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Update from './components/Update.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<StudentList/>}/>
      <Route path='/studentList' element={<StudentList/>}/>
      <Route path='/addStudent' element={<AddStudent/>} />
      <Route path='/update' element = {<Update/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

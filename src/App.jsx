import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function App() {


  return (
    <>
    <div style={{height : '100vh', display: 'flex'}}>
    <NavBar/>
    <Outlet/>
    </div>
    </>
  )
}

export default App

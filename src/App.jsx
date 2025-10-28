import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"

export default function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </Router>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/LandingPage/Login"

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App

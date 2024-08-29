import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Events from "./pages/Events/Events"
import Profile from "./pages/Profile/Profile"
import Availability from "./pages/Availability/Availability"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Login from "./Pages/LandingPage/Login"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

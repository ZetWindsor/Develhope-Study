import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { useState } from "react"
import CounterComponent from "./Bottone"

const ProtectedRoute = ({isLogged, children}) => {
  if (isLogged) {
    return children;
  }else{
    return <Navigate to="/login" />
  }
}

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
  }

  const logout = () => {
    setIsLogged(false);
  } 

  return (
    <>
      <NavBar logout={logout} isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/profile" element={
          <ProtectedRoute isLogged={isLogged}>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
      <CounterComponent />
    </>
  )
}

export default App
